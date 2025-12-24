
'use server';

import fs from 'fs/promises';
import path from 'path';
import initialProducts from '../../data/products.json';
import type { Product, ProductWithImage } from '@/app/admin/products/actions';

const dataFilePath = path.join(process.cwd(), 'data', 'products.json');

async function readProductsFromFile(): Promise<Product[]> {
    try {
        await fs.access(dataFilePath);
        const fileContent = await fs.readFile(dataFilePath, 'utf-8');
        return JSON.parse(fileContent) as Product[];
    } catch {
        // If file doesn't exist, write the initial data and return it
        await fs.writeFile(dataFilePath, JSON.stringify(initialProducts, null, 2), 'utf-8');
        return initialProducts as Product[];
    }
}

async function writeProductsToFile(products: Product[]): Promise<void> {
    await fs.writeFile(dataFilePath, JSON.stringify(products, null, 2), 'utf-8');
}

export async function getProducts(): Promise<ProductWithImage[]> {
    const products = await readProductsFromFile();
    return products.sort((a, b) => {
        const idA = a.id?.split('_')[1] ? Number(a.id.split('_')[1]) : 0;
        const idB = b.id?.split('_')[1] ? Number(b.id.split('_')[1]) : 0;
        return idA - idB;
    });
};

export async function addProductToFile(productData: Omit<Product, 'id'>): Promise<Product> {
    const products = await readProductsFromFile();
    const newId = `prod_${Date.now()}`;
    const newProduct: Product = {
        ...productData,
        id: newId,
    };
    const updatedProducts = [...products, newProduct];
    await writeProductsToFile(updatedProducts);
    return newProduct;
}

export async function updateProductInFile(productId: string, updateData: Partial<Omit<Product, 'id'>>): Promise<Product | null> {
    const products = await readProductsFromFile();
    const productIndex = products.findIndex(p => p.id === productId);

    if (productIndex === -1) {
        return null;
    }

    const updatedProduct = {
        ...products[productIndex],
        ...updateData
    };
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
