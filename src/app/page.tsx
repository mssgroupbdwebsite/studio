import { Hero } from '@/components/home/hero';
import { TrustIndicators } from '@/components/home/trust-indicators';
import { AboutOverview } from '@/components/home/about-overview';
import { ServicesModel } from '@/components/home/services-model';
import { ProductCategories } from '@/components/home/product-categories';
import { BuyerJourney } from '@/components/home/buyer-journey';
import { Capabilities } from '@/components/home/capabilities';
import { QualityOverview } from '@/components/home/quality-overview';
import { Sustainability } from '@/components/home/sustainability';
import { FinalCta } from '@/components/home/final-cta';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustIndicators />
      <AboutOverview />
      <ServicesModel />
      <ProductCategories />
      <BuyerJourney />
      <Capabilities />
      <QualityOverview />
      <Sustainability />
      <FinalCta />
    </div>
  );
}
