
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { productCategories, productSegments } from '@/lib/products-data';
import { getAdminServices } from '@/firebase/server-init';

const productSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, "Name is required"),
    category: z.enum(productCategories),
    segment: z.enum(productSegments),
    sourcingModel: z.enum(['Manufacturer', 'Trading Partner']),
    imageId: z.string().min(1, "Image is required"),
});

export type ProductFormValues = z.infer<typeof productSchema>;

async function getDb() {
  const { firestore } = getAdminServices();
  return firestore;
}

export async function addProduct(data: ProductFormValues) {
  const validation = productSchema.safeParse(data);
  if (!validation.success) {
    return { success: false, errors: validation.error.flatten().fieldErrors };
  }

  const firestore = await getDb();
  const newProductId = firestore.collection('products').doc().id;
  
  const newProduct = {
    ...validation.data,
    id: newProductId,
    hidden: false, // Default to visible
  };
  
  const productRef = firestore.collection('products').doc(newProductId);
  await productRef.set(newProduct);


  revalidatePath('/admin/products');
  revalidatePath('/products');

  return { success: true };
}

export async function updateProduct(data: ProductFormValues) {
    const validation = productSchema.safeParse(data);
    if (!validation.success || !validation.data.id) {
        return { success: false, errors: validation.error?.flatten().fieldErrors || { _form: ['Invalid data'] } };
    }
    
    const firestore = await getDb();
    const productRef = firestore.collection('products').doc(validation.data.id);

    await productRef.update(validation.data);

    revalidatePath('/admin/products');
    revalidatePath('/products');

    return { success: true };
}


export async function toggleProductVisibility(productId: string, willBeHidden: boolean) {
    if (!productId) {
      return { success: false, error: 'Product ID is required' };
    }

    try {
        const firestore = await getDb();
        const productRef = firestore.collection('products').doc(productId);
        
        await productRef.update({ hidden: willBeHidden });

        revalidatePath('/admin/products');
        revalidatePath('/products');
        
        return { success: true };
    } catch (error) {
        const message = error instanceof Error ? error.message : "An unknown error occurred";
        return { success: false, error: message };
    }
}
