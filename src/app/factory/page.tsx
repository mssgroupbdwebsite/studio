
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import FactoryPageComponent from './factory-page';

export const metadata: Metadata = {
  title: `Our Factory - ${siteConfig.name}`,
  description: 'Explore our state-of-the-art apparel manufacturing facilities. See our knitting, cutting, sewing, and finishing divisions.',
};

export default function FactoryPage() {
  return <FactoryPageComponent />;
}
