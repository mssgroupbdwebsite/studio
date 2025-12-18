import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center text-center">
      <div className="absolute inset-0">
        <Image
          src="https://picsum.photos/seed/hero-bg/1600/900"
          alt="Diverse apparel on display"
          fill
          className="object-cover"
          priority
          data-ai-hint="apparel display"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
      </div>
      <div className="relative z-10 p-4 container mx-auto text-white">
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-shadow-md">
          Excellence in Apparel Sourcing
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-shadow">
          Your trusted partner for quality manufacturing and global logistics in
          the heart of Bangladesh.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/products">
                Explore Our Products <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent text-white border-white hover:bg-white hover:text-primary">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
