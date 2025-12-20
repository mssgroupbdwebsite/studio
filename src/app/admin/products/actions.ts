
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { productCategories, productSegments } from '@/lib/products-data';
import { doc } from 'firebase/firestore';
import { setDocumentNonBlocking, deleteDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { getFirestore } from 'firebase-admin/firestore';
import { initializeAdminApp } from '@/firebase/server-init';

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
  const adminApp = await initializeAdminApp();
  return getFirestore(adminApp);
}

export async function addProduct(data: ProductFormValues) {
  const validation = productSchema.safeParse(data);
  if (!validation.success) {
    return { success: false, errors: validation.error.flatten().fieldErrors };
  }

  const firestore = await getDb();
  const newProductId = `p${Date.now()}`;
  const productRef = firestore.collection('products').doc(newProductId);
  
  const newProduct = {
    ...validation.data,
    id: newProductId,
  };
  
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

    await productRef.set(validation.data, { merge: true });

    revalidatePath('/admin/products');
    revalidatePath('/products');

    return { success: true };
}


export async function deleteProduct(productId: string) {
    if (!productId) {
      return { success: false, errors: { _form: ['Product ID is required'] } };
    }

    const firestore = await getDb();
    const productRef = firestore.collection('products').doc(productId);
    
    await productRef.delete();

    revalidatePath('/admin/products');
    revalidatePath('/products');
    
    return { success: true };
}
