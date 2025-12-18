
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
    <section className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-semibold uppercase tracking-wider font-headline">Product Lines</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
            Our Diverse Product Range
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From everyday essentials to high-fashion pieces, we source and
            manufacture a wide spectrum of apparel across several key categories.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category) => (
            <Card key={category} className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
              <CardHeader className="items-center p-8">
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
        <div className="mt-16 text-center">
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
