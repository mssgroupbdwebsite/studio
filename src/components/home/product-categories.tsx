
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Waves, Layers, Shirt, User } from 'lucide-react';
import { productCategories } from '@/lib/products-data';

const categoryIcons: { [key: string]: React.ReactNode } = {
  Knitwear: <Waves className="h-8 w-8 text-primary" />,
  Woven: <Layers className="h-8 w-8 text-primary" />,
  Denim: <Shirt className="h-8 w-8 text-primary" />,
  Sweater: <User className="h-8 w-8 text-primary" />,
};

export function ProductCategories() {
  return (
    <section className="bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary tracking-tight">
            Our Diverse Product Range
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From everyday essentials to high-fashion pieces, we source and
            manufacture a wide spectrum of apparel across several key categories.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category) => (
            <Card key={category} className="text-center group hover:shadow-lg transition-shadow">
              <CardHeader className="items-center">
                <div className="mb-4">
                  {categoryIcons[category] || <Shirt className="h-8 w-8 text-primary" />}
                </div>
                <CardTitle className="font-headline text-xl">{category}</CardTitle>
                <CardDescription className="pt-2">
                  High-quality {category.toLowerCase()} garments for all seasons.
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg">
            <Link href="/products">
              Explore Full Catalog <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
