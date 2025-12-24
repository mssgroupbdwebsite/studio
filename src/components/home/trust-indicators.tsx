
'use client';

import { Globe, Award, ShieldCheck, TrendingUp, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const indicators = [
  {
    icon: <Globe className="h-8 w-8 text-primary" />,
    text: 'Global Sourcing Network',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    text: 'Decades of Experience',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    text: 'Commitment to Quality',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    text: 'Trusted by Leading Brands',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    text: 'Dedicated Merchandising Teams',
  },
    {
    icon: <Zap className="h-8 w-8 text-primary" />,
    text: 'Flexible Production Models',
    },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function TrustIndicators() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeUp}
      className="bg-secondary/50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-8 gap-x-4 justify-items-center py-12"
        >
          {indicators.map((indicator, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="flex flex-col items-center gap-3 text-center"
            >
              {indicator.icon}
              <p className="font-semibold text-sm text-secondary-foreground">
                {indicator.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
