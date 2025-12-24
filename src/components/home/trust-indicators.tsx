
'use client';

import { Globe, Award, ShieldCheck, TrendingUp, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const indicators = [
  {
    icon: <Globe className="h-10 w-10 text-primary" />,
    title: 'Global Sourcing',
    description: 'Extensive network for materials and partners.',
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: 'Visionary Leadership',
    description: 'Pioneering the future of apparel manufacturing.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Quality Guaranteed',
    description: 'Rigorous AQL standards at every step.',
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: 'Brand Trust',
    description: 'A reliable partner for leading global brands.',
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: 'Expert Teams',
    description: 'Dedicated on-the-ground merchandising.',
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: 'Flexible Models',
    description: 'Solutions for both large and small orders.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function TrustIndicators() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="bg-secondary/50"
    >
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-32">
        <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto">
           <span className="text-primary font-semibold uppercase tracking-wider font-headline">Why Partner With Us?</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
            Your Success is Our Bottom Line
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide the foundation of trust and expertise your apparel business needs to thrive in a competitive market.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {indicators.map((indicator, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8, boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)' }}
              className="bg-background p-8 rounded-2xl shadow-lg transition-all"
            >
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                    {indicator.icon}
                </div>
                <div>
                  <h3 className="font-headline font-bold text-lg text-foreground">
                    {indicator.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                      {indicator.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
