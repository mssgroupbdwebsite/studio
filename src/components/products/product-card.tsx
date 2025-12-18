
import Image from 'next/image';
import type { Product } from '@/lib/products-data';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col group">
      <CardContent className="p-0">
        <div className="relative aspect-[3/4] w-full overflow-hidden">
          <Image
            src={product.image.imageUrl}
            alt={product.image.description}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={product.image.imageHint}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-4 flex-grow bg-card">
        <div className="flex-grow">
            <h3 className="font-headline font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.category} &bull; {product.segment}</p>
        </div>
        <Badge
          variant={product.sourcingModel === 'Manufacturer' ? 'default' : 'outline'}
          className={cn(
            'mt-2',
            product.sourcingModel === 'Manufacturer' 
              ? 'bg-accent/80 text-accent-foreground border-accent' 
              : 'border-muted-foreground/50 text-muted-foreground'
          )}
        >
          {product.sourcingModel}
        </Badge>
      </CardFooter>
    </Card>
  );
}
