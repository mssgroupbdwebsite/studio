
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
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export function Hero() {
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 0.5], ['0%', '40%']);
  
  return (
    <section>
      <div className="relative h-[75vh] md:h-[calc(100vh-150px)] flex items-center justify-start text-left">
        <motion.div
          className="absolute inset-0"
          style={{ y: parallaxY }}
        >
          <Image
            src="https://res.cloudinary.com/dkfxz5wgx/image/upload/de9caitggnsiaeiwnm6w"
            alt="Professional man and woman in stylish apparel"
            fill
            className="object-cover object-left"
            priority
            data-ai-hint="apparel models"
            sizes="100vw"
          />
        </motion.div>
      </div>
      <div className="bg-background">
          <div className="container mx-auto px-4 md:px-6 -mt-16 relative z-10">
              <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={stagger}
                  className="bg-card p-6 rounded-lg shadow-2xl"
              >
                  <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild size="lg">
                          <Link href="/contact">
                              Start a Project <ArrowRight />
                          </Link>
                          </Button>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button asChild variant="outline" size="lg">
                          <Link href="/products">
                              Explore Products
                          </Link>
                          </Button>
                      </motion.div>
                  </motion.div>
              </motion.div>
          </div>
      </div>
    </section>
  );
}
