
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
        description: 'Orjon brings creative flair and a keen eye for trends to the team, leading the design department.'
    },
    {
        name: 'Jane Smith',
        role: 'Head of Production',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/qhveuyuh3c5ercd73doy',
        description: 'Jane oversees all production lines, ensuring efficiency, quality, and on-time delivery.'
    },
    {
        name: 'Emily White',
        role: 'Marketing Director',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/jao5i9xzp8hs7mtselmh',
        description: 'Emily drives the brand’s global presence, crafting marketing strategies that connect with audiences.'
    },
    {
        name: 'Michael Brown',
        role: 'Logistics Manager',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/xxbdatzh6kgbypm2nftm',
        description: 'Michael manages the complex global supply chain, ensuring seamless product movement.'
    },
    {
        name: 'Sarah Green',
        role: 'Quality Assurance Lead',
        imageUrl: 'https://res.cloudinary.com/dkfxz5wgx/image/upload/xbkjkmrtqbkf1yjuzz6o',
        description: 'Sarah is the guardian of our quality promise, implementing rigorous testing protocols.'
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

const memberPositions = [
    { top: '0%', left: '50%', transform: 'translate(-50%, -50%)', isReversed: false },
    { top: '25%', left: '95%', transform: 'translate(-95%, -25%)', isReversed: true },
    { top: '75%', left: '95%', transform: 'translate(-95%, -75%)', isReversed: true },
    { top: '100%', left: '50%', transform: 'translate(-50%, -100%)', isReversed: false },
    { top: '75%', left: '5%', transform: 'translate(-5%, -75%)', isReversed: false },
    { top: '25%', left: '5%', transform: 'translate(-5%, -25%)', isReversed: false },
];

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

      {/* New Team Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="relative w-full aspect-square max-w-5xl mx-auto">
             {/* Center Circle */}
            <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[35%] rounded-full overflow-hidden"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
            >
                <Image src="https://picsum.photos/seed/office/600/600" alt="Meet the team background" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                    <h2 className="text-4xl font-bold text-primary-foreground text-center leading-tight">Meet the Team</h2>
                </div>
            </motion.div>

            {/* Team Members Orbit */}
            {[mdDetails, ...teamMembers].map((member, index) => {
                const position = memberPositions[index];
                const alignmentClass = position.isReversed ? 'flex-row-reverse text-left' : 'text-right';
                const textAlignClass = position.isReversed ? 'text-left' : 'text-right';

                return (
                     <motion.div 
                        key={member.name} 
                        className="absolute flex items-center gap-6 w-1/3"
                        style={{ top: position.top, left: position.left, transform: position.transform }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                     >
                        <div className={`flex items-center gap-6 ${alignmentClass}`}>
                            <div className="flex-shrink-0 relative h-28 w-28 md:h-36 md:w-36">
                                <div className="absolute inset-0 rounded-full border-4 border-primary/50" />
                                 <Image
                                    src={member.imageUrl}
                                    alt={`Portrait of ${member.name}`}
                                    fill
                                    className="object-cover rounded-full p-1.5"
                                    sizes="144px"
                                />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold font-headline">{member.name}</h3>
                                <p className="text-primary font-semibold">{member.role}</p>
                                <p className="text-xs text-muted-foreground mt-2">{member.description}</p>
                                <div className={`flex gap-3 mt-3 ${position.isReversed ? 'justify-start' : 'justify-end'}`}>
                                    {member.socials?.map((social, i) => (
                                        <a key={i} href={social.href} className="flex items-center justify-center h-8 w-8 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                                           {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Carousel Section */}
      <section className="py-24 md:py-32 bg-secondary/30 relative">
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

    