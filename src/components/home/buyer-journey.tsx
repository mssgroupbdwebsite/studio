'use client';

import { Handshake, Package, Search, Factory, ArrowRight } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const journeySteps = [
  {
    icon: <Search />,
    title: 'Inquiry & Consultation',
    description: "It all starts with your vision. Reach out with your requirements, and we'll understand your brand, design needs, and target market.",
  },
  {
    icon: <Factory />,
    title: 'Sourcing & Development',
    description: "We leverage our vast network to source the perfect materials and develop samples, ensuring every detail aligns with your vision.",
  },
  {
    icon: <Package />,
    title: 'Production & QA',
    description: "Our on-the-ground teams monitor production closely with rigorous quality checks at every stage to guarantee your standards.",
  },
  {
    icon: <Handshake />,
    title: 'Logistics & Delivery',
    description: "We handle all complexities of logistics and shipping, ensuring a smooth and timely delivery of your finished products to your doorstep.",
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

export function BuyerJourney() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });


  return (
    <motion.section
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
      className="bg-secondary/50"
    >
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-32">
        <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto">
             <span className="text-primary font-semibold uppercase tracking-wider font-headline">Our Process</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
                Your Journey to Success, Simplified
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
                We've streamlined the apparel sourcing process into a seamless, transparent, and efficient experience for our partners.
            </p>
        </motion.div>
        
        <div className="relative mt-20">
          <motion.div 
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/30"
            style={{ scaleY: pathLength, originY: 0 }}
          />
          <div className="relative grid grid-cols-1 gap-16">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:text-right' : 'md:text-left md:order-3'}`}>
                  <p className="text-primary font-bold">{`Step ${index + 1}`}</p>
                  <h3 className="text-2xl font-bold font-headline">{step.title}</h3>
                  <p className="mt-2 text-muted-foreground">{step.description}</p>
                </div>
                
                <div className="hidden md:flex justify-center md:order-2">
                    <div className="relative h-14 w-14 flex items-center justify-center rounded-full bg-background text-primary shadow-lg ring-8 ring-background">
                      {step.icon}
                    </div>
                </div>
                 <div className="flex md:hidden justify-start items-center gap-4">
                     <div className="relative h-14 w-14 flex items-center justify-center rounded-full bg-background text-primary shadow-lg ring-8 ring-background">
                      {step.icon}
                    </div>
                </div>

                <div className={`hidden md:block ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`} />

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}