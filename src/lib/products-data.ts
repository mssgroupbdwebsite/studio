
'use server';

import { getAdminServices } from '@/firebase/server-init';
import type { Product, ProductWithImage } from '@/app/admin/products/actions';

const { firestore: db } = getAdminServices();
const productsCollection = db.collection('products');

export async function getProducts(): Promise<ProductWithImage[]> {
    try {
        const snapshot = await productsCollection.orderBy('name', 'asc').get();
        if (snapshot.empty) {
            return [];
        }
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as ProductWithImage));
    } catch (error) {
        console.error("Error fetching products from Firestore:", error);
        return [];
    }
};

export async function addProductToFirestore(productData: Omit<Product, 'id'>): Promise<Product> {
    const docRef = await productsCollection.add(productData);
    return {
        id: docRef.id,
        ...productData,
    };
}

export async function updateProductInFirestore(productId: string, updateData: Partial<Omit<Product, 'id'>>): Promise<Product | null> {
    const docRef = productsCollection.doc(productId);
    await docRef.update(updateData);
    const updatedDoc = await docRef.get();
    if (!updatedDoc.exists) return null;
    return { id: updatedDoc.id, ...updatedDoc.data() } as Product;
}

export async function deleteProductFromFirestore(productId: string): Promise<boolean> {
    const docRef = productsCollection.doc(productId);
    await docRef.delete();
    return true; // Assume success, or add checks if needed
}

export async function deleteMultipleProductsFromFirestore(productIds: string[]): Promise<boolean> {
    const batch = db.batch();
    productIds.forEach(id => {
        const docRef = productsCollection.doc(id);
        batch.delete(docRef);
    });
    await batch.commit();
    return true;
}
