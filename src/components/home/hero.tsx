
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[85vh] md:h-[calc(100vh-56px)]">
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dkfxz5wgx/image/upload/de9caitggnsiaeiwnm6w"
          alt="Modern apparel manufacturing facility"
          fill
          className="object-cover object-left"
          priority
          data-ai-hint="apparel factory"
          sizes="100vw"
        />
      </div>
      <div className="relative z-10 h-full flex items-end justify-start">
        <div className="container mx-auto px-4 md:px-6 pb-24 md:pb-32">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 ml-0 md:ml-12">
            <Button asChild size="default">
              <Link href="/contact">
                Start a Project <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="default" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 text-white">
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
