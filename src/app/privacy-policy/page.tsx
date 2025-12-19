import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import PrivacyPolicyPageComponent from './privacy-policy-page';

export const metadata: Metadata = {
  title: `Privacy Policy - ${siteConfig.name}`,
  description: `Privacy Policy for ${siteConfig.name}`,
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyPageComponent />;
}
