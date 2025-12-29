
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import GalleryPageComponent from './gallery-page';

export const metadata: Metadata = {
  title: `Gallery - ${siteConfig.name}`,
  description: `Meet the team behind ${siteConfig.name} and explore our gallery.`,
};

export default function GalleryPage() {
  return <GalleryPageComponent />;
}
