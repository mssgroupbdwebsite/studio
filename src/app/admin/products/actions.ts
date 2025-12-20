
'use server';

import fs from 'fs/promises';
import path from 'path';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { Product, productCategories, productSegments } from '@/lib/products-data';

const productsFilePath = path.join(process.cwd(), 'src', 'lib', 'products.json');

const productSchema = z.object({
    id: z.string().optional(),
    name: z.string().min(1, "Name is required"),
    category: z.enum(productCategories),
    segment: z.enum(productSegments),
    sourcingModel: z.enum(['Manufacturer', 'Trading Partner']),
    imageId: z.string().min(1, "Image is required"),
});

export type ProductFormValues = z.infer<typeof productSchema>;

async function readProductsFile(): Promise<Omit<Product, 'image'>[]> {
  try {
    const fileContent = await fs.readFile(productsFilePath, 'utf-8');
    return JSON.parse(fileContent);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

async function writeProductsFile(products: Omit<Product, 'image'>[]) {
  await fs.writeFile(productsFilePath, JSON.stringify(products, null, 2), 'utf-8');
}

export async function getProducts() {
  const products = await readProductsFile();
  return products;
}

export async function addProduct(data: ProductFormValues) {
  const validation = productSchema.safeParse(data);
  if (!validation.success) {
    return { success: false, errors: validation.error.flatten().fieldErrors };
  }

  const products = await readProductsFile();
  const newProduct = {
    ...validation.data,
    id: `p${Date.now()}`,
  };

  products.push(newProduct);
  await writeProductsFile(products);

  revalidatePath('/admin/products');
  revalidatePath('/products');

  return { success: true };
}

export async function updateProduct(data: ProductFormValues) {
    const validation = productSchema.safeParse(data);
    if (!validation.success || !validation.data.id) {
        return { success: false, errors: validation.error?.flatten().fieldErrors || { _form: ['Invalid data'] } };
    }

    const products = await readProductsFile();
    const index = products.findIndex(p => p.id === validation.data.id);

    if (index === -1) {
        return { success: false, errors: { _form: ['Product not found'] } };
    }

    products[index] = validation.data as Omit<Product, 'image'>;
    await writeProductsFile(products);

    revalidatePath('/admin/products');
    revalidatePath('/products');

    return { success: true };
}


export async function deleteProduct(productId: string) {
    const products = await readProductsFile();
    const updatedProducts = products.filter(p => p.id !== productId);

    if (products.length === updatedProducts.length) {
        return { success: false, errors: { _form: ['Product not found'] } };
    }

    await writeProductsFile(updatedProducts);

    revalidatePath('/admin/products');
    revalidatePath('/products');
    
    return { success: true };
}
