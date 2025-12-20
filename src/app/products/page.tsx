
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import ProductsPageComponent from './products-page';

export const metadata: Metadata = {
  title: `Product Catalog - ${siteConfig.name}`,
  description: `Explore our extensive product catalog, including knitwear, woven, denim, and sweater for all segments. Sourced via our manufacturer and trading partner network.`,
};

// Revalidate this page every 60 seconds
export const revalidate = 60;

export default function ProductsPage() {
  return <ProductsPageComponent />;
}
