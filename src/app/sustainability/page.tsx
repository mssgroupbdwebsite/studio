
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import SustainabilityPageComponent from './sustainability-page';

export const metadata: Metadata = {
  title: `Sustainability - ${siteConfig.name}`,
  description: `Our commitment to sustainable and ethical apparel manufacturing.`,
};

export default function SustainabilityPage() {
  return <SustainabilityPageComponent />;
}
