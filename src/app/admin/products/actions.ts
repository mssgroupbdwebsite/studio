
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { collection, addDoc, doc, updateDoc, deleteDoc, writeBatch } from 'firebase/firestore';
import { getAdminServices } from '@/firebase/server-init';
import { productCategories, productSegments } from '@/config/products';

export type ProductCategory = typeof productCategories[number];
export type ProductSegment = typeof productSegments[number];
export type SourcingModel = 'Manufacturer' | 'Trading Partner';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  segment: ProductSegment;
  sourcingModel: SourcingModel;
  imageUrl: string; 
  description: string;
  hidden?: boolean;
}

// This type is used on the client, so it doesn't contain the full image object.
export interface ProductWithImage extends Product {}

const productSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, "Name is required"),
    category: z.enum(productCategories),
    segment: z.enum(productSegments),
    sourcingModel: z.enum(['Manufacturer', 'Trading Partner']),
    imageUrl: z.string().min(1, "Image is required").url("Must be a valid URL."),
    description: z.string().min(1, "Description is required"),
});

export type ProductFormValues = z.infer<typeof productSchema>;

export async function addProduct(data: ProductFormValues) {
  const validation = productSchema.safeParse(data);

  if (!validation.success) {
      return { success: false, error: "Invalid data provided." };
  }

  try {
    const { firestore } = getAdminServices();
    await firestore.collection('products').add({ ...validation.data, hidden: false });
    revalidatePath('/products');
    return { success: true };
  } catch (e: any) {
    return { success: false, error: e.message || 'Failed to add product.' };
  }
}

export async function updateProduct(data: ProductFormValues) {
    const validation = productSchema.safeParse(data);

    if (!validation.success || !data.id) {
      return { success: false, error: "Invalid data or missing product ID." };
    }

    const { id, ...productData } = validation.data;

    try {
        const { firestore } = getAdminServices();
        await firestore.collection('products').doc(id!).update(productData);
        revalidatePath('/products');
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message || 'Failed to update product.' };
    }
}

export async function toggleProductVisibility(productId: string, willBeHidden: boolean) {
    if (!productId) {
        return { success: false, error: "Product ID is required." };
    }

    try {
        const { firestore } = getAdminServices();
        await firestore.collection('products').doc(productId).update({ hidden: willBeHidden });
        revalidatePath('/products');
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message || 'Failed to update product visibility.' };
    }
}

export async function deleteProduct(productId: string) {
    if (!productId) {
        return { success: false, error: "Product ID is required." };
    }

    try {
        const { firestore } = getAdminServices();
        await firestore.collection('products').doc(productId).delete();
        revalidatePath('/products');
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message || 'Failed to delete product.' };
    }
}

export async function deleteSelectedProducts(productIds: string[]) {
    if (!productIds || productIds.length === 0) {
        return { success: false, error: "No product IDs provided." };
    }

    try {
        const { firestore } = getAdminServices();
        const batch = firestore.batch();
        productIds.forEach(id => {
            const docRef = firestore.collection('products').doc(id);
            batch.delete(docRef);
        });
        await batch.commit();
        revalidatePath('/products');
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message || 'Failed to delete products.' };
    }
}
