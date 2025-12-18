
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

export function QualityOverview() {
  return (
    <section className="bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
           <div className="order-last md:order-first">
             <span className="text-primary font-semibold uppercase tracking-wider font-headline">Quality First</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
              Uncompromising Quality, Guaranteed
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Quality isn't just a department; it's the operating system of our entire organization. From initial material sourcing to the final stitch, we enforce rigorous quality control standards.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold">Multi-Stage Inspections</h4>
                  <p className="text-muted-foreground">From fabric to finished garment, we inspect at every step.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold">AQL 2.5 Standard</h4>
                   <p className="text-muted-foreground">We adhere to an AQL 2.5 baseline for all production runs.</p>
                </div>
              </li>
               <li className="flex items-start">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold">Dedicated QA Teams</h4>
                  <p className="text-muted-foreground">Our on-site teams provide real-time monitoring and feedback.</p>
                </div>
              </li>
            </ul>
             <Button asChild className="mt-8" size="lg" variant="outline">
              <Link href="/quality">
                Our Quality Standards <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="relative aspect-square md:aspect-[4/3.5] rounded-lg overflow-hidden group">
            <Image
              src="https://picsum.photos/seed/quality-assurance/800/600"
              alt="Apparel quality inspection"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="quality assurance"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
