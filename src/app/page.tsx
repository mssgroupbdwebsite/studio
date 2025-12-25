
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
import { BlogOverview } from '@/components/home/blog-overview';
import { getBlogPosts, type BlogPost } from '@/lib/blogs';

export default async function Home() {
  const allPosts = await getBlogPosts();
  const posts = allPosts.filter(p => !p.hidden).slice(0, 3);

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
      <BlogOverview posts={posts} />
      <FinalCta />
    </div>
  );
}
