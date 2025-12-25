
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
  const fullHeadline = "YOUR TRUSTED PARTNER IN APPAREL SOURCING & MANUFACTURING";

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
         <div className="absolute inset-0 bg-black/30" />
      </motion.div>
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-2xl text-white"
        >
          <motion.div
            variants={fadeUp}
            className="relative inline-block"
          >
            <span className="relative text-sm font-semibold uppercase tracking-widest font-headline text-white/80">
              MSS GROUP BD
            </span>
          </motion.div>
          <motion.h1
            variants={sentence}
            className="mt-4 text-4xl md:text-6xl font-extrabold font-headline tracking-tight text-shadow-md"
          >
             
                {fullHeadline.split(" ").map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-block mr-3">
                        {word.split("").map((char, index) => (
                            <motion.span key={`${char}-${index}`} variants={letter} className={word.toUpperCase() === 'APPAREL' || word.toUpperCase() === 'SOURCING' || word.toUpperCase() === 'MANUFACTURING' || word === '&' ? 'text-primary' : ''}>
                                {char}
                            </motion.span>
                        ))}
                    </span>
                ))}
             
          </motion.h1>
           <motion.p variants={fadeUp} className="mt-6 text-lg text-white/90 max-w-lg">
            Delivering quality-driven production, ethical sourcing, and global supply solutions.
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
                <Button asChild variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20">
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
