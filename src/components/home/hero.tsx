import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[80vh] md:h-[calc(100vh-56px)] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/hero-bg/1800/1200"
          alt="Abstract background image"
          fill
          className="object-cover"
          priority
          data-ai-hint="abstract background"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </div>
      <div className="relative z-10 p-4 container mx-auto">
        <div className="max-w-3xl text-left">
           <span className="text-primary font-semibold uppercase tracking-wider font-headline">
             Welcome to MSS Group
            </span>
          <h1 className="mt-2 text-4xl md:text-6xl font-bold font-headline tracking-tight text-foreground">
             Your Partner in Apparel Sourcing & Manufacturing
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-start gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Start a Project <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent">
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
