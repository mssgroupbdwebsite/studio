
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import ProductsPageComponent from './products-page';
import { getProducts } from '@/lib/products-data';

export const metadata: Metadata = {
  title: `Product Catalog - ${siteConfig.name}`,
  description: `Explore our extensive product catalog, including knitwear, woven, denim, and sweater for all segments. Sourced via our manufacturer and trading partner network.`,
};

export const revalidate = 0; // Revalidate on every request

export default async function ProductsPage() {
  const products = await getProducts();
  const visibleProducts = products.filter(p => !p.hidden);
  return <ProductsPageComponent products={visibleProducts} />;
}
