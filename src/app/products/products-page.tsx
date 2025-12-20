
'use client';

import { ProductCatalog } from '@/components/products/product-catalog';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { collection, query, where } from 'firebase/firestore';
import type { Product } from '@/lib/products-data';
import { Skeleton } from '@/components/ui/skeleton';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function ProductsPageComponent() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  const firestore = useFirestore();
  const productsQuery = useMemoFirebase(() => {
    if (!firestore) return null;
    // Query for products that are NOT hidden
    return query(collection(firestore, 'products'), where('hidden', '!=', true));
  }, [firestore]);

  const { data: products, isLoading } = useCollection<Omit<Product, 'image'>>(productsQuery);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      className="flex flex-col bg-background"
    >
      <motion.header
        variants={fadeUp}
        className="relative h-[50vh] flex items-center justify-center overflow-hidden text-center"
      >
        <motion.div
          className="absolute inset-0"
          style={{ y: parallaxY }}
        >
          <Image
            src="https://picsum.photos/seed/fashion-catalog/1920/1280"
            alt="Diverse collection of apparel"
            fill
            className="object-cover"
            priority
            data-ai-hint="fashion catalog"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        <div className="relative z-10 container mx-auto px-4 md:px-6 py-16">
          <span className="text-primary font-semibold uppercase tracking-wider font-headline">
            Our Products
          </span>
          <h1 className="mt-2 text-4xl md:text-6xl font-bold font-headline text-white tracking-tight text-shadow-md">
            Product Catalog
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
            Discover a wide range of high-quality apparel. We offer flexible
            sourcing through our own manufacturing units and a network of
            trusted trading partners.
          </p>
        </div>
      </motion.header>
      <motion.div variants={fadeUp}>
        {isLoading ? (
            <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
                <div className="space-y-4">
                    <Skeleton className="h-10 w-full" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
                        <Skeleton className="h-[400px] w-full" />
                        <Skeleton className="h-[400px] w-full" />
                        <Skeleton className="h-[400px] w-full" />
                        <Skeleton className="h-[400px] w-full" />
                    </div>
                </div>
            </div>
        ) : (
            <ProductCatalog productsData={products || []} />
        )}
      </motion.div>
    </motion.div>
  );
}
