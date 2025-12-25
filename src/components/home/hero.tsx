
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
};

export function Hero() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 0.5], ['0%', '40%']);
  const fullHeadline = "Your Partner in Apparel Sourcing & Manufacturing";
  const splitIndex = Math.floor(fullHeadline.length / 2.5);
  const headlinePart1 = fullHeadline.substring(0, splitIndex);
  const headlinePart2 = fullHeadline.substring(splitIndex);

  return (
    <section className="relative h-[85vh] md:h-[calc(100vh-56px)] flex items-center justify-start text-left">
      <motion.div
        className="absolute inset-0"
        style={{ y: parallaxY }}
      >
        <Image
          src="https://picsum.photos/seed/hero-bg/1800/1200"
          alt="Abstract background image of textile"
          fill
          className="object-cover"
          priority
          data-ai-hint="abstract textile"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/30 to-transparent" />
      </motion.div>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-2xl"
        >
          <motion.span variants={fadeUp} className="text-primary font-semibold uppercase tracking-widest font-headline">
            MSS Group BD
          </motion.span>
          <motion.h1
            variants={sentence}
            className="mt-4 text-4xl md:text-6xl font-extrabold font-headline tracking-tight"
          >
             <span className="text-white text-shadow-lg shadow-black/30">
                {headlinePart1.split("").map((char, index) => (
                <motion.span key={`p1-${char}-${index}`} variants={letter}>
                    {char}
                </motion.span>
                ))}
             </span>
             <span className="text-primary text-shadow-md shadow-black/20">
                {headlinePart2.split("").map((char, index) => (
                <motion.span key={`p2-${char}-${index}`} variants={letter}>
                    {char}
                </motion.span>
                ))}
             </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg md:text-xl text-muted-foreground">
            {siteConfig.description}
          </motion.p>
          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-start gap-4">
             <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start a Project <ArrowRight />
                  </Link>
                </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild variant="outline" size="lg" className="bg-background/50 backdrop-blur-sm">
                  <Link href="/products">
                    Explore Products
                  </Link>
                </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
