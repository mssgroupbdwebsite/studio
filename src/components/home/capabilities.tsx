'use client';

import { CheckCircle2, Users, ShieldCheck, Truck, BarChart, Palette } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const capabilitiesList = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Expert Merchandising',
    description:
      'Our experienced merchandisers work closely with you to translate your vision into reality, managing the entire product lifecycle.',
  },
  {
    icon: <CheckCircle2 className="h-8 w-8 text-primary" />,
    title: 'Rigorous Quality Assurance',
    description:
      'We implement multi-stage quality control processes to ensure every product meets the highest standards of excellence.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Ethical & Sustainable Sourcing',
    description:
      'We are committed to responsible sourcing, partnering with factories that adhere to strict ethical and environmental standards.',
  },
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Streamlined Logistics',
    description:
      'From factory floor to your warehouse, we manage all logistics, ensuring timely and cost-effective delivery of your goods.',
  },
   {
    icon: <Palette className="h-8 w-8 text-primary" />,
    title: 'Product Design & Development',
    description:
      'Our R&D team helps with trend analysis, material innovation, and sample development to create market-leading products.',
  },
    {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: 'Market & Trend Analysis',
    description:
      'We provide valuable insights into market trends and consumer behavior to help you make informed decisions for your collections.',
  },
];

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

export function Capabilities() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="bg-background"
    >
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-32">
        <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto">
           <span className="text-primary font-semibold uppercase tracking-wider font-headline">What We Do Best</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
            Our Core Capabilities
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We provide an end-to-end solution, covering every aspect of the
            apparel supply chain with precision and expertise.
          </p>
        </motion.div>
        <motion.div variants={stagger} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilitiesList.map((capability, index) => (
            <motion.div key={index} variants={fadeUp}>
                <Card className="p-6 h-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all bg-secondary/30">
                  <CardHeader className="p-0 mb-4 flex-row items-center gap-4">
                    <div className="flex-shrink-0 text-primary">{capability.icon}</div>
                    <CardTitle className="font-headline text-xl font-bold">
                        {capability.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                     <p className="text-muted-foreground">
                        {capability.description}
                    </p>
                  </CardContent>
                </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}