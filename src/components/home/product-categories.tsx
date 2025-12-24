
'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Waves, Layers, Shirt, User } from 'lucide-react';
import { productCategories } from '@/config/products';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from '@/lib/utils';

const categoryIcons: { [key: string]: React.ReactNode } = {
  Knit: <Waves className="h-8 w-8 text-primary" />,
  Woven: <Layers className="h-8 w-8 text-primary" />,
  Denim: <Shirt className="h-8 w-8 text-primary" />,
  Sweater: <User className="h-8 w-8 text-primary" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const displayedCategories = productCategories.slice(0, 12);

export function ProductCategories() {

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={stagger}
      className="bg-background"
    >
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-32">
        <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-semibold uppercase tracking-wider font-headline">Product Lines</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
            Our Diverse Product Range
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From everyday essentials to high-fashion pieces, we source and
            manufacture a wide spectrum of apparel across several key categories.
          </p>
        </motion.div>
        
        <motion.div variants={fadeUp} className="mt-16">
           <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {displayedCategories.map((category) => (
                <CarouselItem key={category} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                     <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary h-full">
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:inline-flex" />
            <CarouselNext className="hidden lg:inline-flex" />
          </Carousel>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-16 text-center">
          <Button asChild size="lg">
            <Link href="/products">
              Explore Full Catalog <ArrowRight />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
