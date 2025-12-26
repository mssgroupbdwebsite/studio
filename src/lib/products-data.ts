
'use server';

import { getAdminServices } from '@/firebase/server-init';
import { revalidatePath } from 'next/cache';
import type { Product, ProductWithImage } from '@/app/admin/products/actions';

const { firestore } = getAdminServices();
const productsCollection = firestore.collection('products');


export async function getProducts(): Promise<ProductWithImage[]> {
    const snapshot = await productsCollection.orderBy('name').get();
    if (snapshot.empty) {
        return [];
    }
    const products: ProductWithImage[] = [];
    snapshot.forEach(doc => {
        products.push({ id: doc.id, ...(doc.data() as Omit<Product, 'id'>) });
    });
    return products;
};

export async function addProductToFile(productData: Omit<Product, 'id'>): Promise<Product> {
    const docRef = await productsCollection.add(productData);
    revalidatePath('/admin/products');
    revalidatePath('/products');
    return { ...productData, id: docRef.id };
}

export async function updateProductInFile(productId: string, updateData: Partial<Omit<Product, 'id'>>): Promise<Product | null> {
    const docRef = productsCollection.doc(productId);
    const doc = await docRef.get();
    if (!doc.exists) {
        return null;
    }
    await docRef.update(updateData);
    revalidatePath('/admin/products');
    revalidatePath('/products');

    const updatedDoc = await docRef.get();
    return { id: updatedDoc.id, ...(updatedDoc.data() as Omit<Product, 'id'>) };
}

export async function deleteProductFromFile(productId: string): Promise<boolean> {
    const docRef = productsCollection.doc(productId);
    const doc = await docRef.get();
    if (!doc.exists) {
        return false;
    }
    await docRef.delete();
    revalidatePath('/admin/products');
    revalidatePath('/products');
    return true;
}

export async function deleteMultipleProductsFromFile(productIds: string[]): Promise<boolean> {
    const batch = firestore.batch();
    productIds.forEach(id => {
        const docRef = productsCollection.doc(id);
        batch.delete(docRef);
    });
    await batch.commit();
    revalidatePath('/admin/products');
    revalidatePath('/products');
    return true;
}
