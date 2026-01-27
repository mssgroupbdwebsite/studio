
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Factory, Droplets, Scissors, SewingPin, CheckSquare, Shirt } from 'lucide-react';

const factoryDivisions = [
  {
    icon: <Scissors className="h-8 w-8 text-primary" />,
    name: 'Cutting Division',
    description: 'Precision cutting with advanced automated machinery ensures consistency and minimizes fabric waste.',
    images: [
      { src: 'https://picsum.photos/seed/cutting1/600/400', alt: 'Automated fabric cutting machine', hint: 'fabric cutting' },
      { src: 'https://picsum.photos/seed/cutting2/600/400', alt: 'Fabric layering for cutting', hint: 'fabric layers' },
      { src: 'https://picsum.photos/seed/cutting3/600/400', alt: 'Detailed pattern cutting', hint: 'pattern cutting' },
    ]
  },
  {
    icon: <SewingPin className="h-8 w-8 text-primary" />,
    name: 'Knitting Division',
    description: 'High-speed circular knitting machines produce a wide range of knit fabrics with exceptional quality and texture.',
    images: [
      { src: 'https://picsum.photos/seed/knitting1/600/400', alt: 'Circular knitting machines in operation', hint: 'knitting machine' },
      { src: 'https://picsum.photos/seed/knitting2/600/400', alt: 'Close-up of knit fabric production', hint: 'knit fabric' },
      { src: 'https://picsum.photos/seed/knitting3/600/400', alt: 'Spools of yarn for knitting', hint: 'yarn spools' },
    ]
  },
    {
    icon: <Droplets className="h-8 w-8 text-primary" />,
    name: 'Washing Plant',
    description: 'Modern, eco-friendly washing machines for various garment treatments, including softeners and special effects.',
    images: [
      { src: 'https://picsum.photos/seed/washing1/600/400', alt: 'Industrial washing machines for garments', hint: 'industrial washing' },
      { src: 'https://picsum.photos/seed/washing2/600/400', alt: 'Garment dyeing process', hint: 'garment dyeing' },
      { src: 'https://picsum.photos/seed/washing3/600/400', alt: 'Water treatment facility for washing plant', hint: 'water treatment' },
    ]
  },
  {
    icon: <Shirt className="h-8 w-8 text-primary" />,
    name: 'Ironing & Finishing',
    description: 'Our finishing section ensures every garment is perfectly pressed, folded, and packed to meet client specifications.',
    images: [
      { src: 'https://picsum.photos/seed/ironing1/600/400', alt: 'Steam ironing station', hint: 'steam iron' },
      { src: 'https://picsum.photos/seed/finishing1/600/400', alt: 'Garment folding and packing', hint: 'garment packing' },
      { src: 'https://picsum.photos/seed/finishing2/600/400', alt: 'Final quality check before shipping', hint: 'quality check' },
    ]
  },
];

const marqueeImages = [
  'https://picsum.photos/seed/marquee1/400/300',
  'https://picsum.photos/seed/marquee2/400/300',
  'https://picsum.photos/seed/marquee3/400/300',
  'https://picsum.photos/seed/marquee4/400/300',
  'https://picsum.photos/seed/marquee5/400/300',
  'https://picsum.photos/seed/marquee6/400/300',
  'https://picsum.photos/seed/marquee7/400/300',
  'https://picsum.photos/seed/marquee8/400/300',
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const marqueeVariants = {
  animate: {
    x: [0, -3200],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 80,
        ease: "linear",
      },
    },
  },
};


export default function FactoryPageComponent() {
  return (
    <div className="bg-background text-foreground">
      <header className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/factory-main/1920/1080"
            alt="Wide shot of a modern apparel factory"
            fill
            className="object-cover filter brightness-50"
            priority
            data-ai-hint="apparel factory"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative container mx-auto px-4 z-10"
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight text-white text-shadow-md font-headline">
            Our Manufacturing Powerhouse
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto mt-4">
            Where innovation, technology, and skilled craftsmanship come together to create quality apparel.
          </motion.p>
        </motion.div>
      </header>

      {/* Infrastructure Section */}
       <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-semibold uppercase tracking-wider font-headline">Our Infrastructure</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">
              State-of-the-Art Facilities
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our factory is equipped with modern machinery and managed by a team of experienced professionals dedicated to efficiency and quality. Explore the core divisions that form our production backbone.
            </p>
          </motion.div>
        </div>
       </section>

       {/* Divisions Section */}
       <div className="space-y-24 md:space-y-32">
        {factoryDivisions.map((division, index) => (
          <section key={division.name} className={index % 2 === 1 ? 'bg-secondary/50 py-24 md:py-32' : 'py-24 md:py-32'}>
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={stagger}
                className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
              >
                <div className={index % 2 === 1 ? 'md:order-last' : ''}>
                  <div className="flex items-center gap-4">
                    {division.icon}
                    <h3 className="text-3xl font-bold font-headline">{division.name}</h3>
                  </div>
                  <p className="mt-4 text-lg text-muted-foreground">{division.description}</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    {division.images.map((image, imgIndex) => (
                        <motion.div 
                          key={imgIndex} 
                          variants={fadeUp}
                          className="relative aspect-video rounded-lg overflow-hidden shadow-lg group"
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                data-ai-hint={image.hint}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </motion.div>
                    ))}
                </div>
              </motion.div>
            </div>
          </section>
        ))}
       </div>

      {/* Auto-scrolling gallery */}
      <section className="py-24 md:py-32 w-full overflow-hidden">
        <div className="container mx-auto px-4 text-center">
             <motion.div initial="hidden" whileInView="visible" viewport={{ once: true}} variants={fadeUp}>
                <h2 className="text-3xl font-bold font-headline">A Glimpse into Our Operations</h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                    A continuous look at the moments that make up our manufacturing process.
                </p>
             </motion.div>
        </div>
        <motion.div className="mt-16 flex gap-4" variants={marqueeVariants} animate="animate">
            {[...marqueeImages, ...marqueeImages].map((img, index) => (
                <Card key={index} className="overflow-hidden flex-shrink-0 w-[400px]">
                    <div className="relative aspect-[4/3]">
                        <Image
                            src={img}
                            alt={`Factory image ${index + 1}`}
                            fill
                            className="object-cover"
                            sizes="400px"
                        />
                    </div>
                </Card>
            ))}
        </motion.div>
      </section>

    </div>
  );
}
