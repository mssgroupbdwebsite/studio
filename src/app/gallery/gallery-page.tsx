
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const mdDetails = {
    name: 'A. al-Mamun',
    role: 'Founder & CEO',
    imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/obmekpiozv9nwykamn8j',
    description: "A visionary leader with over two decades of experience in the apparel industry, A. al-Mamun founded MSS Group with a commitment to quality, innovation, and ethical manufacturing. His leadership drives the company's success and global expansion.",
    socials: [
      { icon: <Linkedin className="h-4 w-4"/>, href: '#' },
      { icon: <Twitter className="h-4 w-4"/>, href: '#' },
      { icon: <Facebook className="h-4 w-4" />, href: '#'},
    ]
};

const teamMembers = [
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
    {
        name: 'Jessica Lee',
        role: 'HR Manager',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/mmaq1i5zfovbbyo1ajjg',
    },
    {
        name: 'David Chen',
        role: 'Finance Head',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/giaug5xkvf2jpvqpqyuv',
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
      <header className="py-24 md:py-32 bg-secondary/30 text-center">
        <div className="container mx-auto px-4">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary font-headline">Meet Our Team</h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                    The passionate, dedicated, and expert individuals who make MSS Group a leader in the apparel industry.
                </p>
            </motion.div>
        </div>
      </header>

      {/* MD Section */}
       <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="grid lg:grid-cols-2 gap-12 items-center bg-card p-8 rounded-3xl shadow-2xl border"
          >
            <div className="relative aspect-square lg:aspect-[3/4] rounded-2xl overflow-hidden">
               <Image
                    src={mdDetails.imageUrl}
                    alt={`Portrait of ${mdDetails.name}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-4xl font-bold font-headline">{mdDetails.name}</h2>
              <p className="text-xl text-primary font-semibold mt-1">{mdDetails.role}</p>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                {mdDetails.description}
              </p>
               <div className="mt-8 flex items-center gap-4">
                 <p className="font-semibold">Follow:</p>
                    {mdDetails.socials.map((social, i) => (
                        <motion.a 
                          key={i} 
                          href={social.href} 
                          className="flex items-center justify-center h-10 w-10 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                           {social.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Grid Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {teamMembers.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                className="group relative text-center"
              >
                <motion.div 
                    className="relative aspect-square rounded-full overflow-hidden shadow-lg mx-auto w-48 h-48 border-4 border-background group-hover:border-primary transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Image
                    src={member.imageUrl}
                    alt={`Portrait of ${member.name}`}
                    fill
                    className="object-cover transition-transform duration-500"
                    sizes="200px"
                  />
                </motion.div>
                <div className="mt-6">
                    <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                    <p className="text-primary font-semibold">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Carousel Section */}
      <section className="py-24 md:py-32 relative">
         <div className="container mx-auto px-4 relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl font-bold font-headline flex items-center justify-center gap-4 text-primary"><Camera className="h-10 w-10" /> In the Moment</h2>
                <p className="text-lg text-muted-foreground mt-6">
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

    