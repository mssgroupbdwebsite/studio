
import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';
import productsData from './products.json';

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

// The products array is now augmented with image data at runtime.
export const products: Product[] = productsData.map(productInfo => ({
  ...productInfo,
  image: findImage(productInfo.imageId),
})) as Product[];


export const productCategories: readonly ProductCategory[] = ['Knitwear', 'Woven', 'Denim', 'Sweater'];
export const productSegments: readonly ProductSegment[] = ['Menswear', 'Womenswear', 'Kids & Newborn', 'Unisex'];
