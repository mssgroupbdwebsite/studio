'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function FinalCta() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeUp}
      className="relative text-primary-foreground"
    >
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=1920&h=1080&fit=crop"
          alt="Dark abstract background"
          fill
          className="object-cover"
          data-ai-hint="dark abstract"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <div className="relative container mx-auto px-4 md:px-6 py-16 md:py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-headline tracking-tight">
          Ready to Start Your Next Apparel Project?
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
          Let's create something amazing together. Our team is ready to help you navigate the complexities of sourcing and manufacturing, ensuring your vision comes to life with quality and care.
        </p>
        <Button asChild className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground" size="lg">
          <Link href="/contact">
            Get in Touch <ArrowRight />
          </Link>
        </Button>
      </div>
    </motion.section>
  );
}
