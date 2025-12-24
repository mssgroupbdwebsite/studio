
import Image from 'next/image';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import type { ProductWithImage } from '@/app/admin/products/actions';

interface ProductCardProps {
  product: ProductWithImage;
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className="relative group"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        whileHover={{
          scale: 1.03,
          rotateY: 10,
          boxShadow: '0px 30px 40px -20px rgba(0,0,0,0.3)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="h-full"
      >
        <Card className="h-full overflow-hidden flex flex-col relative z-10 bg-card">
           <div
            className={cn(
              'absolute top-0 right-0 z-20 text-xs font-bold text-white uppercase tracking-widest px-4 py-2 shadow-lg',
              product.sourcingModel === 'Manufacturer'
                ? 'bg-primary'
                : 'bg-accent text-accent-foreground',
              'transform origin-top-right -rotate-0 rounded-bl-2xl'
            )}
           >
            {product.sourcingModel}
          </div>

          {/* Animated Glow Effect */}
           <div className="absolute inset-[-2px] bg-gradient-to-r from-primary/50 to-accent/50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg animate-pulse" />


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
          <CardFooter className="flex flex-col items-start gap-1 p-4 flex-grow bg-card/80 backdrop-blur-sm">
            <div className="flex-grow">
              <p className="text-sm font-semibold text-primary">
                {product.category} &bull; {product.segment}
              </p>
              <h3 className="font-headline font-bold text-lg leading-tight mt-1">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                {product.image.description}
              </p>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </motion.div>
  );
}
