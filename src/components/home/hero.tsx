
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function Hero() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 0.5], ['0%', '50%']);

  return (
    <section className="relative h-[80vh] md:h-[calc(100vh-56px)] flex items-center">
      <motion.div 
        className="absolute inset-0"
        style={{ y: parallaxY }}
      >
        <Image
          src="https://picsum.photos/seed/hero-bg/1800/1200"
          alt="Abstract background image"
          fill
          className="object-cover"
          priority
          data-ai-hint="abstract background"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/50 to-transparent" />
      </motion.div>
      <div className="relative z-10 p-4 container mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-3xl text-left"
        >
          <motion.span variants={fadeUp} className="text-primary font-semibold uppercase tracking-wider font-headline">
            Welcome to MSS Group
          </motion.span>
          <motion.h1 variants={fadeUp} className="mt-2 text-4xl md:text-6xl font-bold font-headline tracking-tight text-foreground">
            Your Partner in Apparel Sourcing & Manufacturing
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg md:text-xl text-muted-foreground">
            {siteConfig.description}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap items-center justify-start gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Start a Project <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent">
              <Link href="/products">
                Explore Products
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
