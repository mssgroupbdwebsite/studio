import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import DisclaimerPageComponent from './disclaimer-page';

export const metadata: Metadata = {
  title: `Disclaimer - ${siteConfig.name}`,
  description: `Disclaimer for ${siteConfig.name}`,
};

export default function DisclaimerPage() {
  return <DisclaimerPageComponent />;
}
