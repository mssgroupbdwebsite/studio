
import Image from 'next/image';
import type { Product } from '@/lib/products-data';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col group relative">
      <div
        className={cn(
          "absolute top-2 right-2 z-10 py-1 px-3 text-xs font-bold text-white rounded-full",
          product.sourcingModel === 'Manufacturer'
            ? 'bg-primary'
            : 'bg-secondary text-secondary-foreground'
        )}
      >
        {product.sourcingModel}
      </div>

      <CardContent className="p-0">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={product.image.imageUrl}
            alt={product.image.description}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            data-ai-hint={product.image.imageHint}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
           <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="secondary">
              View Details <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-1 p-4 flex-grow bg-card">
        <div className="flex-grow">
            <h3 className="font-headline font-semibold text-lg leading-tight">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.category} &bull; {product.segment}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
