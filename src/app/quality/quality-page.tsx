
'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { CheckCircle, Scale, HeartHandshake, Factory, Leaf, Recycle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const compliancePoints = [
    { text: "Legal & Ethical Compliance", icon: <Scale className="h-5 w-5 text-primary" /> },
    { text: "Zero Child Labor Policy", icon: <HeartHandshake className="h-5 w-5 text-primary" /> },
    { text: "Building & Fire Safety", icon: <Factory className="h-5 w-5 text-primary" /> },
    { text: "Worker Health & Safety", icon: <CheckCircle className="h-5 w-5 text-primary" /> }
];

const sustainabilityPoints = [
    { text: "Eco-Friendly Materials", icon: <Leaf className="h-5 w-5 text-primary" /> },
    { text: "Responsible Production", icon: <Recycle className="h-5 w-5 text-primary" /> },
    { text: "Waste Reduction", icon: <CheckCircle className="h-5 w-5 text-primary" /> },
    { text: "Energy Efficiency", icon: <Factory className="h-5 w-5 text-primary" /> }
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


export default function QualityPageComponent() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="bg-background text-foreground"
    >
       <motion.header variants={fadeUp} className="relative h-[50vh] flex items-center justify-center text-center overflow-hidden bg-secondary/20">
        <div className="absolute inset-0">
            <Image
                src="https://picsum.photos/seed/quality-control/1920/1080"
                alt="Detailed view of fabric quality inspection"
                fill
                className="object-cover filter brightness-50"
                priority
                data-ai-hint="quality control"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 z-10">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-white text-shadow-md font-headline">
                Quality & Compliance
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto">
                Our unwavering commitment to excellence, ethical practices, and a sustainable future.
            </p>
        </div>
      </motion.header>

      <main>
        {/* Quality Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="py-24 md:py-32"
        >
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                     <div className="relative aspect-square md:aspect-[4/3.5] rounded-lg overflow-hidden group shadow-2xl">
                        <Image
                        src="https://res.cloudinary.com/dkfxz5wgx/image/upload/svgwcyskvo68pviqwm3r"
                        alt="Hand inspecting fabric texture"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint="fabric inspection"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div>
                        <span className="text-primary font-semibold uppercase tracking-wider font-headline">Uncompromising Quality</span>
                        <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
                            Excellence in Every Stitch
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                         Quality isn't just a final check; it's the foundation of our entire manufacturing process. We implement multi-stage quality control protocols to ensure every product not only meets but exceeds international standards. Our dedicated QA teams are on the ground, monitoring every phase from material sourcing to final packaging.
                        </p>
                        <ul className="mt-6 space-y-3 text-muted-foreground">
                            <li className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0"/>
                                <span>Multi-stage inspections from raw materials to finished goods.</span>
                            </li>
                             <li className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0"/>
                                <span>Adherence to AQL 2.5 and client-specific quality benchmarks.</span>
                            </li>
                             <li className="flex items-center gap-3">
                                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0"/>
                                <span>In-house labs for fabric testing and performance analysis.</span>
                            </li>
                        </ul>
                         <Button asChild className="mt-8" size="lg">
                            <Link href="/contact">
                                Request a Quality Report <ArrowRight />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </motion.section>

        {/* Compliance Section */}
         <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="py-24 md:py-32 bg-secondary/50"
          >
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                    <div className="md:order-last relative aspect-square md:aspect-[4/3.5] rounded-lg overflow-hidden group shadow-2xl">
                        <Image
                        src="https://res.cloudinary.com/dkfxz5wgx/image/upload/wuens18szp1qwaenf6xe"
                        alt="Happy and safe factory workers"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint="factory workers"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div className="md:order-first">
                        <span className="text-primary font-semibold uppercase tracking-wider font-headline">Ethical & Social Compliance</span>
                        <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
                            Manufacturing with Integrity
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                          We believe that great products are made by people who are treated with respect and fairness. Our commitment to ethical compliance is absolute. We partner exclusively with factories that are fully compliant with local labor laws and international human rights standards, ensuring a safe, healthy, and fair working environment for all.
                        </p>
                        <div className="mt-8 grid grid-cols-2 gap-6">
                            {compliancePoints.map(point => (
                                <div key={point.text} className="flex items-center gap-3">
                                    {point.icon}
                                    <span className="font-semibold">{point.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>

        {/* Sustainability Section */}
        <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="py-24 md:py-32">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
                     <div className="relative aspect-square md:aspect-[4/3.5] rounded-lg overflow-hidden group shadow-2xl">
                        <Image
                        src="https://res.cloudinary.com/dkfxz5wgx/image/upload/g2lomecltv1darlsfyum"
                        alt="Rolls of sustainable, eco-friendly fabric"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint="sustainable materials"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                    <div>
                        <span className="text-primary font-semibold uppercase tracking-wider font-headline">Environmental Responsibility</span>
                        <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
                            A Greener Future for Fashion
                        </h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                          Sustainability is woven into the fabric of our operations. We actively work to minimize our environmental footprint by prioritizing eco-friendly materials, reducing waste, and partnering with facilities that invest in water and energy-saving technologies. Our goal is to create apparel that is both beautiful and responsible.
                        </p>
                        <div className="mt-8 grid grid-cols-2 gap-6">
                           {sustainabilityPoints.map(point => (
                                <div key={point.text} className="flex items-center gap-3">
                                    {point.icon}
                                    <span className="font-semibold">{point.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
      </main>
    </motion.div>
  );
}
