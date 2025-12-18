import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function AboutOverview() {
  return (
    <section className="bg-background">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative aspect-square md:aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://picsum.photos/seed/about-us/600/450"
              alt="Team discussing apparel designs"
              fill
              className="object-cover"
              data-ai-hint="team meeting"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary tracking-tight">
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
            <Button asChild className="mt-6" size="lg">
              <Link href="/about">
                Learn More About Us <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
