
'use client';
import { ProductsDataTable } from './_components/products-data-table';
import { columns } from './_components/columns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AddProductDialog } from './_components/add-product-dialog';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, orderBy } from 'firebase/firestore';
import { Product } from '@/lib/products-data';
import { Skeleton } from '@/components/ui/skeleton';

export default function AdminProductsPage() {
  const firestore = useFirestore();
  
  const productsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    return query(collection(firestore, 'products'), orderBy('name'));
  }, [firestore]);

  const { data: products, isLoading } = useCollection<Omit<Product, 'image'>>(productsQuery);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Products</CardTitle>
          <AddProductDialog />
        </div>
      </CardHeader>
      <CardContent>
        {isLoading ? (
            <div className="space-y-4">
                <Skeleton className="h-10 w-1/4" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
            </div>
        ) : (
            <ProductsDataTable columns={columns} data={products || []} />
        )}
      </CardContent>
    </Card>
  );
}
