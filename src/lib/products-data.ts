
import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';

export type ProductCategory = 'Knitwear' | 'Woven' | 'Denim' | 'Sweater';
export type ProductSegment = 'Menswear' | 'Womenswear' | 'Kids & Newborn' | 'Unisex';
export type SourcingModel = 'Manufacturer' | 'Trading Partner';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  segment: ProductSegment;
  sourcingModel: SourcingModel;
  image: ImagePlaceholder;
}

const findImage = (id: string): ImagePlaceholder => {
  const image = PlaceHolderImages.find((img) => img.id === id);
  if (!image) {
    // This is a developer error, so we throw.
    // In a real app, you might want a fallback image.
    throw new Error(`Image with id "${id}" not found in placeholder-images.json.`);
  }
  return image;
};

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Men\'s Knit Polo',
    category: 'Knitwear',
    segment: 'Menswear',
    sourcingModel: 'Manufacturer',
    image: findImage('product-knit-polo'),
  },
  {
    id: 'p2',
    name: 'Men\'s Basic T-Shirt',
    category: 'Knitwear',
    segment: 'Menswear',
    sourcingModel: 'Manufacturer',
    image: findImage('product-knit-tshirt'),
  },
  {
    id: 'p3',
    name: 'Women\'s Knit Top',
    category: 'Knitwear',
    segment: 'Womenswear',
    sourcingModel: 'Trading Partner',
    image: findImage('product-knit-top-women'),
  },
  {
    id: 'p4',
    name: 'Women\'s Cardigan',
    category: 'Knitwear',
    segment: 'Womenswear',
    sourcingModel: 'Manufacturer',
    image: findImage('product-knit-cardigan'),
  },
  {
    id: 'p5',
    name: 'Unisex Fleece Hoodie',
    category: 'Knitwear',
    segment: 'Unisex',
    sourcingModel: 'Manufacturer',
    image: findImage('product-knit-hoodie'),
  },
  {
    id: 'p6',
    name: 'Men\'s Formal Shirt',
    category: 'Woven',
    segment: 'Menswear',
    sourcingModel: 'Trading Partner',
    image: findImage('product-woven-shirt-men'),
  },
  {
    id: 'p7',
    name: 'Men\'s Chino Pants',
    category: 'Woven',
    segment: 'Menswear',
    sourcingModel: 'Manufacturer',
    image: findImage('product-woven-chinos'),
  },
  {
    id: 'p8',
    name: 'Women\'s Casual Blouse',
    category: 'Woven',
    segment: 'Womenswear',
    sourcingModel: 'Trading Partner',
    image: findImage('product-woven-blouse'),
  },
  {
    id: 'p9',
    name: 'Women\'s Summer Dress',
    category: 'Woven',
    segment: 'Womenswear',
    sourcingModel: 'Trading Partner',
    image: findImage('product-woven-dress'),
  },
  {
    id: 'p10',
    name: 'Men\'s Slim-Fit Jeans',
    category: 'Denim',
    segment: 'Menswear',
    sourcingModel: 'Manufacturer',
    image: findImage('product-denim-jeans-men'),
  },
  {
    id: 'p11',
    name: 'Women\'s Denim Jacket',
    category: 'Denim',
    segment: 'Womenswear',
    sourcingModel: 'Manufacturer',
    image: findImage('product-denim-jacket-women'),
  },
  {
    id: 'p12',
    name: 'Unisex Pullover Sweater',
    category: 'Sweater',
    segment: 'Unisex',
    sourcingModel: 'Trading Partner',
    image: findImage('product-sweater-pullover'),
  },
  {
    id: 'p13',
    name: 'Baby Knit Onesie',
    category: 'Knitwear',
    segment: 'Kids & Newborn',
    sourcingModel: 'Manufacturer',
    image: findImage('product-knit-onesie'),
  },
  {
    id: 'p14',
    name: 'Toddler Woven Shorts',
    category: 'Woven',
    segment: 'Kids & Newborn',
    sourcingModel: 'Manufacturer',
    image: findImage('product-woven-toddler-shorts'),
  },
  {
    id: 'p15',
    name: 'Kid\'s Cable-Knit Sweater',
    category: 'Sweater',
    segment: 'Kids & Newborn',
    sourcingModel: 'Trading Partner',
    image: findImage('product-sweater-kids'),
  },
  {
    id: 'p16',
    name: 'Kid\'s Stretch Denim Jeans',
    category: 'Denim',
    segment: 'Kids & Newborn',
    sourcingModel: 'Manufacturer',
    image: findImage('product-denim-kids-jeans'),
  },
];

export const productCategories: readonly ProductCategory[] = ['Knitwear', 'Woven', 'Denim', 'Sweater'];
export const productSegments: readonly ProductSegment[] = ['Menswear', 'Womenswear', 'Kids & Newborn', 'Unisex'];
