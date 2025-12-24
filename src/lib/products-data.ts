
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
  imageId: string; 
  image: ImagePlaceholder;
  hidden?: boolean;
}

const findImage = (id: string): ImagePlaceholder | undefined => {
  return PlaceHolderImages.find((img) => img.id === id);
};

const fallbackImage: ImagePlaceholder = {
    id: "fallback",
    description: "A high-quality apparel item.",
    imageUrl: "https://picsum.photos/seed/placeholder/600/800",
    imageHint: "apparel"
};

const initialProducts: Omit<Product, 'image' | 'id'>[] = [
    { name: 'Classic Pique Polo', category: 'Knitwear', segment: 'Menswear', sourcingModel: 'Manufacturer', imageId: 'product-knit-polo', hidden: false },
    { name: 'Organic Cotton T-Shirt', category: 'Knitwear', segment: 'Unisex', sourcingModel: 'Trading Partner', imageId: 'product-knit-tshirt', hidden: false },
    { name: 'Womens Knit Top', category: 'Knitwear', segment: 'Womenswear', sourcingModel: 'Manufacturer', imageId: 'product-knit-top-women', hidden: false },
    { name: 'Elegant Knit Cardigan', category: 'Knitwear', segment: 'Womenswear', sourcingModel: 'Trading Partner', imageId: 'product-knit-cardigan', hidden: false },
    { name: 'Fleece Zip-Up Hoodie', category: 'Knitwear', segment: 'Unisex', sourcingModel: 'Manufacturer', imageId: 'product-knit-hoodie', hidden: false },
    { name: 'Mens Formal Woven Shirt', category: 'Woven', segment: 'Menswear', sourcingModel: 'Trading Partner', imageId: 'product-woven-shirt-men', hidden: false },
    { name: 'Stretch Chino Pants', category: 'Woven', segment: 'Menswear', sourcingModel: 'Manufacturer', imageId: 'product-woven-chinos', hidden: false },
    { name: 'Flowy Woven Blouse', category: 'Woven', segment: 'Womenswear', sourcingModel: 'Trading Partner', imageId: 'product-woven-blouse', hidden: false },
    { name: 'Summer Woven Dress', category: 'Woven', segment: 'Womenswear', sourcingModel: 'Manufacturer', imageId: 'product-woven-dress', hidden: false },
    { name: 'Mens Straight-Fit Jeans', category: 'Denim', segment: 'Menswear', sourcingModel: 'Trading Partner', imageId: 'product-denim-jeans-men', hidden: false },
    { name: 'Womens Denim Jacket', category: 'Denim', segment: 'Womenswear', sourcingModel: 'Manufacturer', imageId: 'product-denim-jacket-women', hidden: false },
    { name: 'Wool-Blend Pullover', category: 'Sweater', segment: 'Unisex', sourcingModel: 'Trading Partner', imageId: 'product-sweater-pullover', hidden: false },
    { name: 'Baby Knit Onesie', category: 'Knitwear', segment: 'Kids & Newborn', sourcingModel: 'Manufacturer', imageId: 'product-knit-onesie', hidden: false },
    { name: 'Toddler Woven Shorts', category: 'Woven', segment: 'Kids & Newborn', sourcingModel: 'Trading Partner', imageId: 'product-woven-toddler-shorts', hidden: false },
    { name: 'Kids Crewneck Sweater', category: 'Sweater', segment: 'Kids & Newborn', sourcingModel: 'Manufacturer', imageId: 'product-sweater-kids', hidden: false },
    { name: 'Kids Durable Denim Jeans', category: 'Denim', segment: 'Kids & Newborn', sourcingModel: 'Trading Partner', imageId: 'product-denim-kids-jeans', hidden: false },
];


export const products: Product[] = initialProducts.map((p, i) => ({
    ...p,
    id: `prod_${i + 1}`,
    image: findImage(p.imageId) || fallbackImage
}));


export const productCategories = ['Knitwear', 'Woven', 'Denim', 'Sweater'] as const;
export const productSegments = ['Menswear', 'Womenswear', 'Kids & Newborn', 'Unisex'] as const;
