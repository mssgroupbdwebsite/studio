
'use client';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { collection, addDoc, doc, updateDoc, deleteDoc, writeBatch } from 'firebase/firestore';
import { getSdks } from '@/firebase';
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
    const { firestore } = getSdks();
    const productsCollection = collection(firestore, 'products');
    await addDoc(productsCollection, { ...validation.data, hidden: false });
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
        const { firestore } = getSdks();
        const productRef = doc(firestore, 'products', id);
        await updateDoc(productRef, productData);
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
        const { firestore } = getSdks();
        const productRef = doc(firestore, 'products', productId);
        await updateDoc(productRef, { hidden: willBeHidden });
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
        const { firestore } = getSdks();
        const productRef = doc(firestore, 'products', productId);
        await deleteDoc(productRef);
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
        const { firestore } = getSdks();
        const batch = writeBatch(firestore);
        productIds.forEach(id => {
            const docRef = doc(firestore, 'products', id);
            batch.delete(docRef);
        });
        await batch.commit();
        return { success: true };
    } catch (e: any) {
        return { success: false, error: e.message || 'Failed to delete products.' };
    }
}
