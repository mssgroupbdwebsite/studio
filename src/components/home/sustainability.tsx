
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Leaf, Recycle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Sustainability() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="bg-background"
    >
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div variants={fadeUp} className="relative aspect-square md:aspect-[4/3.5] rounded-lg overflow-hidden group">
            <Image
              src="https://picsum.photos/seed/green-fabric/800/600"
              alt="Sustainable materials like cotton and linen"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="green fabric"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div variants={fadeUp} className="order-first md:order-last">
            <span className="text-primary font-semibold uppercase tracking-wider font-headline">Sustainability</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
              Committed to a Greener Future
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We believe in fashion that feels good and does good. Our commitment to sustainability is woven into every aspect of our business, from sourcing eco-friendly materials to ensuring ethical production processes.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <Leaf className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-semibold">Eco-Friendly Materials</h4>
                    <p className="text-sm text-muted-foreground">Prioritizing organic, recycled, and biodegradable fabrics.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Recycle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                    <h4 className="font-semibold">Responsible Production</h4>
                    <p className="text-sm text-muted-foreground">Partnering with factories that invest in water and energy reduction.</p>
                </div>
              </div>
            </div>
             <Button asChild className="mt-8" size="lg" variant="link">
              <Link href="/quality">
                Learn About Our Ethical Promise <ArrowRight />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
