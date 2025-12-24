
import { getProducts } from '@/lib/products-data';
import { ProductsPageClient } from './_components/products-page-client';
import type { ProductWithImage } from './actions';

export default async function AdminProductsPage() {
  const products: ProductWithImage[] = await getProducts();

  return (
    <ProductsPageClient products={products} />
  );
}
