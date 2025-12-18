
import type { Metadata } from 'next';
import { ProductCatalog } from '@/components/products/product-catalog';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: `Product Catalog - ${siteConfig.name}`,
  description: `Explore our extensive product catalog, including knitwear, woven, denim, and sweater for all segments. Sourced via our manufacturer and trading partner network.`,
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col">
      <header className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 md:px-6 py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary tracking-tight">
                Our Product Catalog
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Discover a wide range of high-quality apparel. We offer flexible sourcing through our own manufacturing units and a network of trusted trading partners.
            </p>
        </div>
      </header>
      <ProductCatalog />
    </div>
  );
}
