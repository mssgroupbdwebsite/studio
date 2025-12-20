
'use client';

import { useState } from 'react';
import { productCategories, productSegments, type ProductCategory, type ProductSegment, type Product } from '@/lib/products-data';
import { ProductCard } from './product-card';
import { Button } from '@/components/ui/button';
import { ListFilter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const findImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

const fallbackImage: ImagePlaceholder = {
    id: "fallback",
    description: "A high-quality apparel item.",
    imageUrl: "https://picsum.photos/seed/placeholder/600/800",
    imageHint: "apparel"
};


interface ProductCatalogProps {
  productsData: Omit<Product, 'image'>[];
}

export function ProductCatalog({ productsData }: ProductCatalogProps) {
  const [categoryFilter, setCategoryFilter] = useState<ProductCategory | 'all'>('all');
  const [segmentFilter, setSegmentFilter] = useState<ProductSegment | 'all'>('all');

  const productsWithImages: Product[] = productsData.map(p => ({
    ...p,
    image: findImage(p.imageId) || fallbackImage,
  }));

  const filteredProducts = productsWithImages.filter((product) => {
    const categoryMatch = categoryFilter === 'all' || product.category === categoryFilter;
    const segmentMatch = segmentFilter === 'all' || product.segment === segmentFilter;
    return categoryMatch && segmentMatch;
  });

  const handleResetFilters = () => {
    setCategoryFilter('all');
    setSegmentFilter('all');
  };

  const showResetButton = categoryFilter !== 'all' || segmentFilter !== 'all';

  return (
    <section className="w-full bg-background -mt-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="mb-12 p-6 bg-card border rounded-2xl shadow-xl sticky top-20 z-20 backdrop-blur-xl bg-card/80"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3 font-headline text-xl font-semibold">
                  <ListFilter className="h-6 w-6 text-primary"/>
                  <span>Filter Products</span>
              </div>
              {showResetButton && (
                  <Button variant="ghost" onClick={handleResetFilters} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                    <X className="h-4 w-4" />
                    <span>Reset Filters</span>
                  </Button>
                )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select 
                onValueChange={(value) => setCategoryFilter(value as ProductCategory | 'all')} 
                value={categoryFilter}
              >
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {productCategories.map((category) => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select 
                onValueChange={(value) => setSegmentFilter(value as ProductSegment | 'all')}
                value={segmentFilter}
              >
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="Filter by segment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Segments</SelectItem>
                  {productSegments.map((segment) => (
                    <SelectItem key={segment} value={segment}>{segment}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
            <motion.div 
                key={`${categoryFilter}-${segmentFilter}`}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={stagger}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10"
            >
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <ProductCard product={product} key={product.id} />
                ))
            ) : (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16 col-span-full"
            >
                <h3 className="text-2xl font-headline font-semibold">No Products Found</h3>
                <p className="text-muted-foreground mt-2">Try adjusting your filters to find what you're looking for.</p>
                <Button variant="link" onClick={handleResetFilters} className="mt-4">
                Reset Filters
                </Button>
            </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
