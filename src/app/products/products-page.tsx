
'use client';

import { ProductCatalog } from '@/components/products/product-catalog';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ProductsPageComponent() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
      className="flex flex-col bg-background"
    >
      <motion.header variants={fadeUp} className="bg-secondary/50 border-b">
        <div className="container mx-auto px-4 md:px-6 py-16 text-center">
            <span className="text-primary font-semibold uppercase tracking-wider font-headline">Our Products</span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold font-headline text-foreground tracking-tight">
                Product Catalog
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Discover a wide range of high-quality apparel. We offer flexible sourcing through our own manufacturing units and a network of trusted trading partners.
            </p>
        </div>
      </motion.header>
      <motion.div variants={fadeUp}>
        <ProductCatalog />
      </motion.div>
    </motion.div>
  );
}
