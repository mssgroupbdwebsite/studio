
'use server';

import { promises as fs } from 'fs';
import path from 'path';
import type { Product, ProductWithImage } from '@/app/admin/products/actions';

const productsFilePath = path.join(process.cwd(), 'data', 'products.json');

async function readProductsFromFile(): Promise<Product[]> {
    try {
        const fileContent = await fs.readFile(productsFilePath, 'utf-8');
        return JSON.parse(fileContent);
    } catch (error: any) {
        if (error.code === 'ENOENT') {
            return []; // File not found, return empty array
        }
        throw error;
    }
}

async function writeProductsToFile(products: Product[]): Promise<void> {
    await fs.writeFile(productsFilePath, JSON.stringify(products, null, 2), 'utf-8');
}


export async function getProducts(): Promise<ProductWithImage[]> {
    const products = await readProductsFromFile();
    // In this file-based version, Product and ProductWithImage are the same.
    return products;
};

export async function addProductToFile(productData: Omit<Product, 'id'>): Promise<Product> {
    const products = await readProductsFromFile();
    const newProduct: Product = {
        ...productData,
        id: `prod_${Date.now()}`
    };
    products.unshift(newProduct);
    await writeProductsToFile(products);
    return newProduct;
}

export async function updateProductInFile(productId: string, updateData: Partial<Omit<Product, 'id'>>): Promise<Product | null> {
    const products = await readProductsFromFile();
    const productIndex = products.findIndex(p => p.id === productId);

    if (productIndex === -1) {
        return null;
    }

    const updatedProduct = { ...products[productIndex], ...updateData };
    products[productIndex] = updatedProduct;
    await writeProductsToFile(products);
    return updatedProduct;
}

export async function deleteProductFromFile(productId: string): Promise<boolean> {
    let products = await readProductsFromFile();
    const initialLength = products.length;
    products = products.filter(p => p.id !== productId);

    if (products.length < initialLength) {
        await writeProductsToFile(products);
        return true;
    }
    return false;
}

export async function deleteMultipleProductsFromFile(productIds: string[]): Promise<boolean> {
     let products = await readProductsFromFile();
    const initialLength = products.length;
    products = products.filter(p => !productIds.includes(p.id));

    if (products.length < initialLength) {
        await writeProductsToFile(products);
        return true;
    }
    return false;
}
