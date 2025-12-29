
'use client';

import Image from 'next/image';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Users, Camera } from 'lucide-react';

const teamMembers = [
    {
        name: 'A. al-Mamun',
        role: 'Founder & CEO',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/vgw7r8utrkxzwmsm8hy3',
    },
    {
        name: 'Orjon',
        role: 'Lead Designer',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/tlf5jgxxdysraofyz5ir',
    },
    {
        name: 'Jane Smith',
        role: 'Head of Production',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/qhveuyuh3c5ercd73doy',
    },
    {
        name: 'Emily White',
        role: 'Marketing Director',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/jao5i9xzp8hs7mtselmh',
    },
    {
        name: 'Michael Brown',
        role: 'Logistics Manager',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/xxbdatzh6kgbypm2nftm',
    },
    {
        name: 'Sarah Green',
        role: 'Quality Assurance Lead',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/xbkjkmrtqbkf1yjuzz6o',
    },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};


export default function GalleryPageComponent() {

  return (
    <div className="bg-background text-foreground">
      
      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/team-meeting/1920/1080"
            alt="Diverse team in a creative meeting"
            fill
            className="object-cover filter brightness-50"
            priority
            data-ai-hint="team meeting"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-background/20" />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative container mx-auto px-4 z-10"
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-white text-shadow-md">
            Our Gallery
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto">
            Meet the talented individuals who drive our vision forward and get a glimpse into our world.
          </motion.p>
        </motion.div>
      </header>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold font-headline flex items-center justify-center gap-4"><Users className="h-10 w-10 text-primary" /> Meet Our Team</h2>
            <p className="text-lg text-muted-foreground mt-4">
              The passionate, dedicated, and expert individuals who make MSS Group a leader in the apparel industry.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          >
            {teamMembers.map((member) => (
              <motion.div key={member.name} variants={fadeUp}>
                <Card className="overflow-hidden group text-center border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300">
                    <div className="relative aspect-[4/5] bg-muted">
                         <Image
                            src={member.imageUrl}
                            alt={`Portrait of ${member.name}`}
                            fill
                            className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                    </div>
                    <CardContent className="p-6 bg-card">
                        <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                        <p className="text-primary font-semibold">{member.role}</p>
                    </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Carousel Section */}
      <section className="py-24 md:py-32 bg-background">
         <div className="container mx-auto px-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold font-headline flex items-center justify-center gap-4"><Camera className="h-10 w-10 text-primary" /> In the Moment</h2>
                <p className="text-lg text-muted-foreground mt-4">
                A sliding gallery showcasing our team and process in action.
                </p>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={fadeUp} className="mt-16">
                 <Carousel
                    plugins={[
                        Autoplay({
                        delay: 3000,
                        stopOnInteraction: true,
                        }),
                    ]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                    {teamMembers.map((member, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                            <div className="p-1">
                                <Card className="overflow-hidden aspect-square relative group">
                                     <Image
                                        src={member.imageUrl}
                                        alt={`Gallery image of ${member.name}`}
                                        fill
                                        className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 p-6">
                                            <h3 className="text-xl font-bold text-white text-shadow-md">{member.name}</h3>
                                            <p className="text-primary-foreground/80">{member.role}</p>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-[-1rem] sm:left-[-2rem]" />
                    <CarouselNext className="right-[-1rem] sm:right-[-2rem]" />
                </Carousel>
            </motion.div>
        </div>
      </section>
    </div>
  );
}
