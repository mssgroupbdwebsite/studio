
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Leaf, Recycle, Droplets, BadgeCheck, Sprout, Wind, Factory, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const sustainabilityPillars = [
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: 'Eco-Friendly Materials',
    description: 'We prioritize sourcing organic cotton, recycled polyester, and other sustainable fabrics to reduce our environmental impact.',
  },
  {
    icon: <Droplets className="h-10 w-10 text-primary" />,
    title: 'Water Conservation',
    description: 'Our partner facilities employ advanced dyeing techniques and water treatment plants to minimize water usage and prevent pollution.',
  },
  {
    icon: <Recycle className="h-10 w-10 text-primary" />,
    title: 'Waste Reduction',
    description: 'From fabric scraps to packaging, we implement comprehensive recycling programs and circular economy principles.',
  },
   {
    icon: <Wind className="h-10 w-10 text-primary" />,
    title: 'Carbon Footprint',
    description: 'We continuously work to reduce emissions by optimizing logistics and encouraging the use of renewable energy sources.',
  }
];

const certifications = [
    { icon: <Sprout className="h-8 w-8"/>, name: 'GOTS Certified' },
    { icon: <BadgeCheck className="h-8 w-8"/>, name: 'OEKO-TEX Standard 100' },
    { icon: <Factory className="h-8 w-8"/>, name: 'WRAP Certified' },
    { icon: <Leaf className="h-8 w-8"/>, name: 'BCI Member' },
];

const processSteps = [
    { title: "Responsible Sourcing", description: "Choosing suppliers that share our commitment to sustainability and ethics." },
    { title: "Efficient Production", description: "Utilizing modern machinery and processes to minimize waste and energy." },
    { title: "Eco-Conscious Finishing", description: "Using low-impact dyes and finishing processes that are safe for people and the planet." },
    { title: "Green Logistics", description: "Optimizing shipping routes and using recycled packaging materials to reduce our footprint." }
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

export default function SustainabilityPageComponent() {
  const heroRef = useRef(null);
  const { scrollYProgress: scrollYProgressHero } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgressHero, [0, 1], ['0%', '50%']);

  const processRef = useRef(null);
  const { scrollYProgress: scrollYProgressProcess } = useScroll({
    target: processRef,
    offset: ['start end', 'end start']
  });
  
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="bg-background text-foreground"
    >
      {/* Hero Section */}
      <motion.header ref={heroRef} variants={fadeUp} className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
          <Image
            src="https://picsum.photos/seed/green-energy/1920/1280"
            alt="Wind turbines in a lush green field"
            fill
            className="object-cover filter brightness-50"
            priority
            data-ai-hint="green energy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        </motion.div>
        <div className="relative container mx-auto px-4 z-10">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white text-shadow-md font-headline">
            Fashioning a Better World
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto">
            We believe in creating apparel that not only looks good but also does good for our planet and its people.
          </p>
        </div>
      </motion.header>

      <main>
        {/* Commitment Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="py-24 md:py-32"
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
              <div className="relative aspect-square md:aspect-[4/3.5] rounded-lg overflow-hidden group shadow-2xl">
                <Image
                  src="https://picsum.photos/seed/recycled-fabric/800/700"
                  alt="Hands holding recycled fabric"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  data-ai-hint="recycled fabric"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <span className="text-primary font-semibold uppercase tracking-wider font-headline">Our Commitment</span>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
                  Weaving Sustainability into Every Fiber
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  For us, sustainability is not an afterthought; it's a core business principle. We are dedicated to minimizing our environmental footprint, ensuring ethical practices throughout our supply chain, and paving the way for a more responsible apparel industry.
                </p>
                <p className="mt-4 text-muted-foreground">
                    This commitment extends from the raw materials we select to the final product delivered to your door, ensuring transparency and accountability at every step.
                </p>
                <Button asChild className="mt-8" size="lg" variant="link">
                  <Link href="/quality">
                    Our Ethical Promise <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Pillars Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="py-24 md:py-32 bg-secondary/50"
        >
          <div className="container mx-auto px-4">
            <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto">
              <span className="text-primary font-semibold uppercase tracking-wider font-headline">Core Pillars</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
                Our Sustainability Framework
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Our strategy is built on four key pillars that guide our decisions and actions towards a more sustainable future.
              </p>
            </motion.div>
            <motion.div variants={stagger} className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {sustainabilityPillars.map((pillar) => (
                <motion.div key={pillar.title} variants={fadeUp}>
                  <Card className="text-center p-8 h-full shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 bg-background">
                    <motion.div 
                        className="mb-6 inline-block p-4 bg-primary/10 rounded-full"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                      {pillar.icon}
                    </motion.div>
                    <CardTitle className="font-headline text-xl">{pillar.title}</CardTitle>
                    <CardContent className="p-0 mt-4 text-muted-foreground text-sm">
                      {pillar.description}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Process Section */}
        <section ref={processRef} className="py-24 md:py-32 overflow-hidden">
            <div className="container mx-auto px-4">
                 <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center max-w-3xl mx-auto">
                    <span className="text-primary font-semibold uppercase tracking-wider font-headline">Our Process</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
                        A Journey of Responsibility
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Every step of our production process is designed with sustainability in mind.
                    </p>
                </motion.div>
                <div className="relative mt-20">
                     <motion.div
                        className="absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2"
                        style={{ scaleY: scrollYProgressProcess }}
                     />
                    <div className="space-y-16">
                        {processSteps.map((step, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ root: processRef, once: true, amount: 0.5 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="flex items-center"
                            >
                               <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left order-2'}`}>
                                    <h3 className="text-2xl font-bold font-headline text-primary">{`0${index + 1}. ${step.title}`}</h3>
                                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                                </div>
                                <div className="w-1/2 flex justify-center order-1">
                                    <div className="h-4 w-4 rounded-full bg-primary ring-8 ring-background z-10"/>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Certifications section */}
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="py-24 md:py-32 bg-secondary/50"
        >
            <div className="container mx-auto px-4 text-center">
                 <h2 className="text-3xl font-bold font-headline text-foreground tracking-tight">
                    Verified by Global Standards
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    We adhere to internationally recognized standards to validate our commitment to ethical and sustainable manufacturing.
                </p>
                <motion.div variants={stagger} className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
                    {certifications.map(cert => (
                        <motion.div key={cert.name} variants={fadeUp} className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                            {cert.icon}
                            <span className="font-semibold text-sm">{cert.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
        
        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="py-24"
        >
            <div className="container mx-auto px-4 text-center">
                 <motion.div
                    className="bg-primary text-primary-foreground rounded-2xl p-12 shadow-2xl relative overflow-hidden"
                    whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                 >
                     <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
                     <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">
                            Partner with a Leader in Sustainable Apparel
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-lg opacity-80">
                            Let's work together to create a fashion industry that is both profitable and responsible.
                        </p>
                        <Button asChild className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90" size="lg">
                            <Link href="/contact">
                                Start a Project <ArrowRight />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </motion.section>
      </main>
    </motion.div>
  );
}
