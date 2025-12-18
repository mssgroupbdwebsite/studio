import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function AboutOverview() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative aspect-square md:aspect-[4/3.5] rounded-lg overflow-hidden group">
            <Image
              src="https://picsum.photos/seed/teamwork/800/600"
              alt="Team discussing apparel designs"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="teamwork collaboration"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <span className="text-primary font-semibold uppercase tracking-wider font-headline">About Us</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
              A Legacy of Quality and Trust
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Since our inception, MSS Group has been a cornerstone of the
              Bangladeshi apparel industry. We are more than just a buying
              house; we are a dedicated partner to our clients, offering
              comprehensive sourcing and manufacturing solutions tailored to
              their unique needs.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our journey is built on a foundation of integrity, a relentless
              pursuit of excellence, and a commitment to sustainable and
              ethical practices.
            </p>
            <Button asChild className="mt-8" size="lg" variant="link" >
              <Link href="/about">
                Learn More About Our Story <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
