
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Leaf, Recycle, ArrowRight } from 'lucide-react';

export function Sustainability() {
  return (
    <section className="bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative aspect-square md:aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://picsum.photos/seed/sustainability/600/450"
              alt="Sustainable materials like cotton and linen"
              fill
              className="object-cover"
              data-ai-hint="sustainable materials"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="order-first md:order-last">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary tracking-tight">
              Committed to a Greener Future
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe in fashion that feels good and does good. Our commitment to sustainability is woven into every aspect of our business, from sourcing eco-friendly materials to ensuring ethical production processes.
            </p>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li className="flex items-start">
                <Leaf className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="ml-3">Prioritizing organic, recycled, and biodegradable materials.</span>
              </li>
              <li className="flex items-start">
                <Recycle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="ml-3">Partnering with factories that invest in water and energy reduction.</span>
              </li>
            </ul>
             <Button asChild className="mt-8" size="lg" variant="outline">
              <Link href="/quality">
                Our Ethical Promise <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
