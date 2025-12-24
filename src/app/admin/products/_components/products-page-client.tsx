
'use client';

import { useState, useEffect } from 'react';
import type { ProductWithImage } from '@/lib/products-data';
import { Card, CardContent } from '@/components/ui/card';
import { ProductsDataTable } from './products-data-table';
import { columns } from './columns';
import { AddProductDialog } from './add-product-dialog';
import { Skeleton } from '@/components/ui/skeleton';

interface ProductsPageClientProps {
  products: ProductWithImage[];
}

export function ProductsPageClient({ products: initialProducts }: ProductsPageClientProps) {
  const [products, setProducts] = useState<ProductWithImage[]>(initialProducts);
  const [loading, setLoading] = useState(false);

  // Since data is passed as props, useEffect is no longer needed for initial fetching.
  // We keep the state in case we want to update it on the client after an action.

  return (
    <div className="p-4 md:p-6 space-y-6">
       <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold tracking-tight font-headline">Products</h1>
                <p className="text-muted-foreground">Manage your product catalog.</p>
            </div>
            <AddProductDialog />
        </div>
      <Card>
        <CardContent className="p-6">
          {loading ? (
            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-1/3" />
                </div>
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
            </div>
          ) : (
             <ProductsDataTable columns={columns} data={products} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
