
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Camera, Users, Sparkles, Star } from 'lucide-react';

const teamMembers = [
    {
        name: 'A. al-Mamun',
        role: 'Founder & CEO',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/vgw7r8utrkxzwmsm8hy3',
        color: 'hsla(221, 83%, 53%, 0.4)',
    },
    {
        name: 'Orjon',
        role: 'Lead Designer',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/tlf5jgxxdysraofyz5ir',
        color: 'hsla(180, 83%, 53%, 0.4)',
    },
    {
        name: 'Jane Smith',
        role: 'Head of Production',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/qhveuyuh3c5ercd73doy',
        color: 'hsla(300, 83%, 53%, 0.4)',
    },
    {
        name: 'Emily White',
        role: 'Marketing Director',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/jao5i9xzp8hs7mtselmh',
        color: 'hsla(45, 83%, 53%, 0.4)',
    },
    {
        name: 'Michael Brown',
        role: 'Logistics Manager',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/xxbdatzh6kgbypm2nftm',
        color: 'hsla(120, 83%, 53%, 0.4)',
    },
    {
        name: 'Sarah Green',
        role: 'Quality Assurance Lead',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/xbkjkmrtqbkf1yjuzz6o',
        color: 'hsla(20, 83%, 53%, 0.4)',
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

const StarIcon = (props: any) => (
  <motion.div
    animate={{ rotate: [0, 15, 0], scale: [1, 1.2, 1] }}
    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
  >
    <Star {...props} />
  </motion.div>
);


export default function GalleryPageComponent() {

  return (
    <div className="bg-background text-foreground overflow-hidden">
      
      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background z-0">
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundImage: [
                'radial-gradient(circle at 10% 20%, hsl(var(--primary) / 0.1), transparent 50%)',
                'radial-gradient(circle at 80% 90%, hsl(var(--accent) / 0.1), transparent 50%)',
                'radial-gradient(circle at 50% 50%, hsl(var(--secondary) / 0.1), transparent 50%)',
                'radial-gradient(circle at 20% 80%, hsl(var(--primary) / 0.1), transparent 50%)',
                'radial-gradient(circle at 90% 10%, hsl(var(--accent) / 0.1), transparent 50%)',
                'radial-gradient(circle at 10% 20%, hsl(var(--primary) / 0.1), transparent 50%)',
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
            }}
          />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative container mx-auto px-4 z-10"
        >
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-foreground font-headline flex items-center justify-center gap-4">
             <Sparkles className="h-12 w-12 text-primary" />
            Our Gallery
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl font-light text-muted-foreground max-w-3xl mx-auto">
            Meet the talented individuals who drive our vision forward and get a glimpse into our world.
          </motion.p>
        </motion.div>
      </header>

      {/* Team Section */}
      <section className="py-24 md:py-32">
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
              <motion.div 
                key={member.name} 
                variants={fadeUp}
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
                whileHover="hover"
              >
                  <motion.div 
                    className="absolute inset-0 z-10"
                    style={{
                        background: `radial-gradient(circle at 50% 50%, transparent, ${member.color})`
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    variants={{
                        hover: { opacity: 1, scale: 1.2 }
                    }}
                    transition={{ duration: 0.4, ease: "easeOut"}}
                  />
                  <Image
                    src={member.imageUrl}
                    alt={`Portrait of ${member.name}`}
                    fill
                    className="object-cover object-top z-0 transition-all duration-500 group-hover:scale-110 group-hover:brightness-75"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                      <motion.h3 
                        initial={{ y: 20, opacity: 0 }}
                        variants={{ hover: { y: 0, opacity: 1 } }}
                        transition={{ delay: 0.1, duration: 0.3 }}
                        className="text-2xl font-bold font-headline text-white"
                      >
                        {member.name}
                      </motion.h3>
                      <motion.p 
                        initial={{ y: 20, opacity: 0 }}
                        variants={{ hover: { y: 0, opacity: 1 } }}
                        transition={{ delay: 0.2, duration: 0.3 }}
                        className="text-primary-foreground/80 font-semibold"
                       >
                         {member.role}
                       </motion.p>
                  </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Carousel Section */}
      <section className="py-24 md:py-32 bg-secondary/30 relative">
        <div className="absolute -top-16 -left-16 text-primary/10 opacity-50">
            <StarIcon className="h-48 w-48" />
        </div>
        <div className="absolute -bottom-24 -right-16 text-primary/10 opacity-50">
            <StarIcon className="h-64 w-64" />
        </div>
         <div className="container mx-auto px-4 relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold font-headline flex items-center justify-center gap-4"><Camera className="h-10 w-10 text-primary" /> In the Moment</h2>
                <p className="text-lg text-muted-foreground mt-4">
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
