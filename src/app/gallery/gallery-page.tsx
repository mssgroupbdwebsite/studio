
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, Users, Sparkles, Star, Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const mdDetails = {
    name: 'A. al-Mamun',
    role: 'Founder & CEO',
    imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/obmekpiozv9nwykamn8j',
    description: "A visionary leader with over two decades of experience in the apparel industry, A. al-Mamun founded MSS Group with a commitment to quality, innovation, and ethical manufacturing. His leadership drives the company's success and global expansion.",
    socials: [
      { icon: <Linkedin className="h-5 w-5"/>, href: '#' },
      { icon: <Twitter className="h-5 w-5"/>, href: '#' },
    ]
};

const teamMembers = [
    {
        name: 'Orjon',
        role: 'Lead Designer',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/tlf5jgxxdysraofyz5ir',
        description: 'Orjon brings creative flair and a keen eye for trends to the team, leading the design department to create innovative and market-leading apparel.'
    },
    {
        name: 'Jane Smith',
        role: 'Head of Production',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/qhveuyuh3c5ercd73doy',
        description: 'With a meticulous approach to manufacturing, Jane oversees all production lines, ensuring efficiency, quality, and on-time delivery.'
    },
    {
        name: 'Emily White',
        role: 'Marketing Director',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/jao5i9xzp8hs7mtselmh',
        description: 'Emily drives the brand’s global presence, crafting marketing strategies that connect with audiences and build lasting partnerships.'
    },
    {
        name: 'Michael Brown',
        role: 'Logistics Manager',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/xxbdatzh6kgbypm2nftm',
        description: 'Michael manages the complex global supply chain, ensuring that products move seamlessly from the factory floor to the client’s doorstep.'
    },
    {
        name: 'Sarah Green',
        role: 'Quality Assurance Lead',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/xbkjkmrtqbkf1yjuzz6o',
        description: 'Sarah is the guardian of our quality promise, implementing rigorous testing and inspection protocols at every stage of production.'
    },
];

const galleryImages = [
    { imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/eayys0aebb98lqobl9es', alt: 'Fabric rolls' },
    { imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/rsvqsysoovug8nnyssie', alt: 'Team discussion' },
    { imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/lj0tgvg5sxxljlgvcp7p', alt: 'Quality inspection' },
    { imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/qfkbwmpuafq5tqj9pwge', alt: 'Sustainable materials' },
    { imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/de9caitggnsiaeiwnm6w', alt: 'Factory floor' },
    { imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/uvykkero7jtpzyzv1i8k', alt: 'Manufacturing process' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function GalleryPageComponent() {

  return (
    <div className="bg-background text-foreground overflow-hidden">
      
      {/* Hero Section */}
      <header className="py-24 md:py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                <div className="bg-primary inline-block px-8 py-4">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-wider text-primary-foreground">MEET OUR TEAM</h1>
                </div>
                <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
                    The passionate, dedicated, and expert individuals who make MSS Group a leader in the apparel industry.
                </p>
            </motion.div>
        </div>
      </header>

      {/* MD Section */}
       <section className="py-24 md:py-32 bg-gray-900">
         <div className="container mx-auto px-4">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="grid md:grid-cols-2 gap-12 items-center"
            >
                <div className="relative aspect-[4/5] max-w-md mx-auto w-full">
                     <Image
                        src={mdDetails.imageUrl}
                        alt={`Portrait of ${mdDetails.name}`}
                        fill
                        className="object-cover object-top z-0 rounded-lg shadow-2xl"
                        sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
                <div className="text-white">
                    <h2 className="text-4xl font-bold text-primary font-headline">{mdDetails.name}</h2>
                    <p className="text-xl text-gray-300 mt-1">{mdDetails.role}</p>
                    <p className="mt-6 text-gray-400 leading-relaxed">{mdDetails.description}</p>
                     <div className="mt-8 flex items-center gap-4">
                        {mdDetails.socials.map((social, index) => (
                           <a key={index} href={social.href} className="text-gray-400 hover:text-primary transition-colors">
                                {social.icon}
                           </a>
                        ))}
                    </div>
                </div>
            </motion.div>
         </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-gray-900 relative">
        <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-8">
                 {teamMembers.map((member, index) => (
                    <motion.div 
                        key={member.name}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex flex-col items-center text-center text-white"
                    >
                        <div className="relative h-64 w-64 mb-[-2rem] z-10">
                             <Image
                                src={member.imageUrl}
                                alt={`Portrait of ${member.name}`}
                                fill
                                className="object-cover object-top rounded-full shadow-2xl"
                                sizes="256px"
                            />
                        </div>
                        <Card className="bg-gray-800/50 backdrop-blur-sm pt-12 rounded-lg w-full">
                            <CardContent className="pt-4">
                                <div className="bg-primary text-primary-foreground inline-block px-4 py-1">
                                    <h3 className="text-lg font-bold uppercase tracking-wider">{member.name}</h3>
                                </div>
                                <p className="text-primary mt-3 font-semibold">{member.role}</p>
                                <p className="mt-4 text-gray-400 text-sm leading-relaxed px-4">
                                    {member.description}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* Gallery Carousel Section */}
      <section className="py-24 md:py-32 bg-gray-900 relative">
         <div className="container mx-auto px-4 relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
                 <div className="bg-primary inline-block px-8 py-4">
                    <h2 className="text-4xl font-bold font-headline flex items-center justify-center gap-4 text-primary-foreground"><Camera className="h-10 w-10" /> In the Moment</h2>
                </div>
                <p className="text-lg text-gray-400 mt-6">
                    A visual journey through our facilities, processes, and the moments that define us.
                </p>
            </motion.div>

            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={stagger}
                className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-4"
            >
                {galleryImages.map((img, index) => (
                    <motion.div
                        key={index}
                        variants={fadeUp}
                        whileHover={{ scale: 1.05, zIndex: 10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="group relative aspect-video rounded-2xl overflow-hidden shadow-lg cursor-pointer"
                    >
                         <Image
                            src={img.imageUrl}
                            alt={img.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Camera className="h-8 w-8 text-white/80"/>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>
    </div>
  );
}
