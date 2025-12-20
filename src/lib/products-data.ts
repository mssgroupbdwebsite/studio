
import { PlaceHolderImages, type ImagePlaceholder } from './placeholder-images';
// We no longer import the static JSON file, as data will come from Firestore.

export type ProductCategory = 'Knitwear' | 'Woven' | 'Denim' | 'Sweater';
export type ProductSegment = 'Menswear' | 'Womenswear' | 'Kids & Newborn' | 'Unisex';
export type SourcingModel = 'Manufacturer' | 'Trading Partner';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  segment: ProductSegment;
  sourcingModel: SourcingModel;
  imageId: string; // Keep imageId to reference the placeholder
  image: ImagePlaceholder;
  hidden?: boolean;
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

// The products array is now an empty array.
// It will be populated by data fetched from Firestore.
export const products: Product[] = [];


export const productCategories: readonly ProductCategory[] = ['Knitwear', 'Woven', 'Denim', 'Sweater'];
export const productSegments: readonly ProductSegment[] = ['Menswear', 'Womenswear', 'Kids & Newborn', 'Unisex'];
