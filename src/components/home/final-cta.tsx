
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function FinalCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">
          Ready to Start Your Next Apparel Project?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
          Let's create something amazing together. Our team is ready to help you navigate the complexities of sourcing and manufacturing, ensuring your vision comes to life with quality and care.
        </p>
        <Button asChild className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90" size="lg">
          <Link href="/contact">
            Get in Touch <ArrowRight />
          </Link>
        </Button>
      </div>
    </section>
  );
}
