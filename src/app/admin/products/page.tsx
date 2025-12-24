
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package } from 'lucide-react';

export default function AdminProductsPage() {

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Products</CardTitle>
           {/* The AddProductDialog was removed as it depends on Firebase actions */}
        </div>
      </CardHeader>
      <CardContent>
         <div className="text-center py-16 border-2 border-dashed rounded-lg">
            <Package className="mx-auto h-12 w-12 text-muted-foreground" />
            <h3 className="mt-4 text-lg font-semibold">No Products Found</h3>
            <p className="mt-2 text-sm text-muted-foreground">
                The connection to the products database has been removed.
            </p>
        </div>
      </CardContent>
    </Card>
  );
}
