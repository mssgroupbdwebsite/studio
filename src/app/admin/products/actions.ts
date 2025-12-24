
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { productCategories, productSegments, addProductToFile, updateProductInFile, deleteProductFromFile, updateProduct as updateProductInFileAgain } from '@/lib/products-data';

const productSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, "Name is required"),
    category: z.enum(productCategories),
    segment: z.enum(productSegments),
    sourcingModel: z.enum(['Manufacturer', 'Trading Partner']),
    imageId: z.string().min(1, "Image is required"),
    description: z.string().min(1, "Description is required"),
});

export type ProductFormValues = z.infer<typeof productSchema>;

export async function addProduct(data: ProductFormValues) {
  const validation = productSchema.safeParse(data);

  if (!validation.success) {
      return { success: false, error: "Invalid data provided." };
  }

  const { description, imageId, ...productData } = validation.data;

  try {
    // Note: We're not saving the flat 'description' field to the main product,
    // as it belongs to the image. This logic can be adjusted if needed.
    await addProductToFile({ ...productData, imageId, hidden: false });
    revalidatePath('/admin/products');
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
    
    const { id, description, ...productData } = validation.data;

    try {
        await updateProductInFile(id, productData);
        // Here you might also want a way to update the image description if that's intended
        revalidatePath('/admin/products');
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
        await updateProductInFile(productId, { hidden: willBeHidden });
        revalidatePath('/admin/products');
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
        const deleted = await deleteProductFromFile(productId);
        if (deleted) {
            revalidatePath('/admin/products');
            revalidatePath('/products');
            return { success: true };
        }
        return { success: false, error: 'Product not found.' };
    } catch (e: any) {
        return { success: false, error: e.message || 'Failed to delete product.' };
    }
}
