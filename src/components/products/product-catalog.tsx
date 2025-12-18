
'use client';

import { useState } from 'react';
import { products, productCategories, productSegments, type ProductCategory, type ProductSegment } from '@/lib/products-data';
import { ProductCard } from './product-card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ListFilter, X } from 'lucide-react';

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
    <section className="w-full bg-background">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="mb-8 p-4 bg-card border rounded-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-2 font-headline text-lg font-semibold">
                <ListFilter className="h-5 w-5"/>
                <span>Filter Products</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:flex md:items-center gap-4">
              <Select value={categoryFilter} onValueChange={(value) => setCategoryFilter(value as ProductCategory | 'all')}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {productCategories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={segmentFilter} onValueChange={(value) => setSegmentFilter(value as ProductSegment | 'all')}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Segment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Segments</SelectItem>
                  {productSegments.map((segment) => (
                    <SelectItem key={segment} value={segment}>
                      {segment}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {showResetButton && (
                <Button variant="ghost" onClick={handleResetFilters} className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                  <span>Reset</span>
                </Button>
              )}
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-headline font-semibold">No Products Found</h3>
            <p className="text-muted-foreground mt-2">Try adjusting your filters to find what you're looking for.</p>
            <Button variant="link" onClick={handleResetFilters} className="mt-4">
              Reset Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
