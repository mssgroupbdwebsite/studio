
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import CompanyPageComponent from './company-page';

export const metadata: Metadata = {
  title: `Company - ${siteConfig.name}`,
  description: `Leading apparel manufacturer and retailer from Bangladesh - Quality, Innovation, Excellence`,
};

export default function AboutPage() {
  return <CompanyPageComponent />;
}

    