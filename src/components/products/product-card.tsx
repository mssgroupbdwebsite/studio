
import Image from 'next/image';
import type { Product } from '@/lib/products-data';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col group relative">
      <div
        className={cn(
          "absolute top-2 right-2 z-10 py-1 px-3 text-xs font-bold text-white rounded-full shadow-lg",
          product.sourcingModel === 'Manufacturer'
            ? 'bg-primary'
            : 'bg-accent text-accent-foreground'
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
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-1 p-4 flex-grow bg-card">
        <div className="flex-grow">
            <h3 className="font-headline font-semibold text-lg leading-tight">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.category} &bull; {product.segment}</p>
            <p className="text-sm text-muted-foreground mt-2">{product.image.description}</p>
        </div>
      </CardFooter>
    </Card>
  );
}
