
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

export function QualityOverview() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
           <div className="order-last md:order-first">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary tracking-tight">
              Uncompromising Quality, Guaranteed
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Quality isn't just a department; it's the operating system of our entire organization. From initial material sourcing to the final stitch, we enforce rigorous quality control standards.
            </p>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="ml-3">Multi-stage inspections from fabric to finished garment.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="ml-3">AQL 2.5 standard as a baseline for all production.</span>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="ml-3">Dedicated on-site QA teams for real-time monitoring.</span>
              </li>
            </ul>
             <Button asChild className="mt-8" size="lg">
              <Link href="/quality">
                Our Quality Standards <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="relative aspect-square md:aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://picsum.photos/seed/quality-check/600/450"
              alt="Apparel quality inspection"
              fill
              className="object-cover"
              data-ai-hint="quality inspection"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
