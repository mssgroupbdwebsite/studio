
'use client';

import { products } from '@/lib/products-data';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ProductsDataTable } from './_components/products-data-table';
import { columns } from './_components/columns';
import { AddProductDialog } from './_components/add-product-dialog';

export default function AdminProductsPage() {
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
          <ProductsDataTable columns={columns} data={products} />
        </CardContent>
      </Card>
    </div>
  );
}
