import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import QualityPageComponent from './quality-page';

export const metadata: Metadata = {
  title: `Quality & Compliance - ${siteConfig.name}`,
  description: `Our commitment to quality, ethical compliance, and sustainable manufacturing practices.`,
};

export default function QualityPage() {
  return <QualityPageComponent />;
}
