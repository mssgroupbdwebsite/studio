
import { getProducts, type ProductWithImage } from '@/lib/products-data';
import { ProductsPageClient } from './_components/products-page-client';


export default async function AdminProductsPage() {
  const products = await getProducts();

  return (
    <ProductsPageClient products={products} />
  );
}
