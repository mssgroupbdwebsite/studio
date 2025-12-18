import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';

export function Hero() {
  return (
    <section className="relative h-[80vh] md:h-screen flex items-center justify-center text-left">
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/skyscraper/1600/900"
          alt="Modern skyscraper building"
          fill
          className="object-cover"
          priority
          data-ai-hint="skyscraper building"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 p-4 container mx-auto text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-shadow-md">
             Your Partner in Apparel Sourcing & Manufacturing
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-shadow">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-start gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Contact Our Team
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent border-white hover:bg-white hover:text-primary">
              <Link href="/products">
                Explore Products
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
