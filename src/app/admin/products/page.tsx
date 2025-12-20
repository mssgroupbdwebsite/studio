
import { getProducts } from './actions';
import { ProductsDataTable } from './_components/products-data-table';
import { columns } from './_components/columns';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AddProductDialog } from './_components/add-product-dialog';

export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Products</CardTitle>
          <AddProductDialog />
        </div>
      </CardHeader>
      <CardContent>
        <ProductsDataTable columns={columns} data={products} />
      </CardContent>
    </Card>
  );
}
