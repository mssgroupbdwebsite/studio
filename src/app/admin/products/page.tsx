
'use client';

import { getProducts } from '@/lib/products-data';
import { ProductsPageClient } from './_components/products-page-client';
import type { ProductWithImage } from './actions';
import { useEffect, useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function AdminProductsPage() {
  const [products, setProducts] = useState<ProductWithImage[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
       <div className="p-4 md:p-6 space-y-6">
       <div className="flex items-center justify-between">
            <div>
                <Skeleton className="h-10 w-48" />
                <Skeleton className="h-4 w-64 mt-2" />
            </div>
            <Skeleton className="h-10 w-[145px]" />
        </div>
        <div className="border rounded-md p-6">
            <div className="flex items-center justify-between py-4">
                <Skeleton className="h-10 w-64" />
            </div>
            <div className="space-y-2">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
            </div>
        </div>
    </div>
    )
  }

  return (
    <ProductsPageClient products={products} />
  );
}
