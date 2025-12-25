
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
      delay: 0.5, // Delay to let headline animate first
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


export function Hero() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 0.5], ['0%', '40%']);
  const fullHeadline = "Your Partner in Apparel Sourcing & Manufacturing";

  return (
    <section className="relative h-[85vh] md:h-[calc(100vh-56px)] flex items-center justify-start text-left">
      <motion.div
        className="absolute inset-0"
        style={{ y: parallaxY }}
      >
        <Image
          src="https://res.cloudinary.com/dkfxz5wgx/image/upload/huakbdxmo9g28zogtgtj"
          alt="Modern apparel manufacturing facility"
          fill
          className="object-cover"
          priority
          data-ai-hint="apparel factory"
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
          <motion.div
            variants={fadeUp}
            className="relative inline-block"
          >
            <motion.div
              className="absolute -inset-2"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            >
              <div className="w-full h-full bg-primary/30 rounded-full blur-xl"></div>
            </motion.div>
            <span className="relative text-gold font-semibold uppercase tracking-widest font-headline">
              MSS Group BD
            </span>
          </motion.div>
          <motion.h1
            variants={sentence}
            className="mt-4 text-4xl md:text-6xl font-extrabold font-headline tracking-tight"
          >
             <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {fullHeadline.split("").map((char, index) => (
                <motion.span key={`${char}-${index}`} variants={letter}>
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
