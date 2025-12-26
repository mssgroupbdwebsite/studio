
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function AboutOverview() {
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
          <motion.div
            variants={fadeUp}
            className="relative aspect-square md:aspect-[4/3.5] rounded-lg overflow-hidden group"
          >
            <Image
              src="https://res.cloudinary.com/dkfxz5wgx/image/upload/v1766606014/db69gbxq4f4fz4j3opam.jpg"
              alt="Team discussing apparel designs"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              data-ai-hint="teamwork collaboration"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
          <motion.div variants={fadeUp}>
            <span className="text-primary font-semibold uppercase tracking-wider font-headline">Our Company</span>
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
                Learn More About Our Company <ArrowRight />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
