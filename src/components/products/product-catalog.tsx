
'use client';

import { useState } from 'react';
import { products, productCategories, productSegments, type ProductCategory, type ProductSegment } from '@/lib/products-data';
import { ProductCard } from './product-card';
import { Button } from '@/components/ui/button';
import { ListFilter, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export function ProductCatalog() {
  const [categoryFilter, setCategoryFilter] = useState<ProductCategory | 'all'>('all');
  const [segmentFilter, setSegmentFilter] = useState<ProductSegment | 'all'>('all');

  const filteredProducts = products.filter((product) => {
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
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="w-full bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <motion.div variants={fadeUp} className="mb-12 p-6 bg-card border rounded-lg shadow-sm">
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
                <SelectTrigger>
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
                <SelectTrigger>
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

        {filteredProducts.length > 0 ? (
          <motion.div 
            key={`${categoryFilter}-${segmentFilter}`} // Re-trigger animation on filter change
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <motion.div variants={fadeUp} key={product.id}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div variants={fadeUp} className="text-center py-16">
            <h3 className="text-2xl font-headline font-semibold">No Products Found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters to find what you're looking for.</p>
            <Button variant="link" onClick={handleResetFilters} className="mt-4">
              Reset Filters
            </Button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
