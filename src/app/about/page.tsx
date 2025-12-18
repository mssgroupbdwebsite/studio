
'use client';

import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Globe,
  Star,
  ShieldCheck,
  Heart,
  Users,
  GitCommit,
  CheckCircle,
  Gem,
  Award,
  Zap,
  Leaf,
  Factory,
  BarChart,
  Target,
  Rocket,
  PenTool,
  Scale,
  Briefcase,
  Layers3,
  Package,
  Footprints,
  HeartHandshake,
  ChevronRight,
  Sparkles,
  TargetIcon,
  TrendingUp,
  Clock,
  Palette,
  Globe2,
  FactoryIcon,
  Users2,
  CheckCircle2,
} from 'lucide-react';

// Particle Background Component
const ParticleBackground = () => {
  const particles = Array.from({ length: 50 });
  
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20"
          initial={{
            x: Math.random() * 100 + 'vw',
            y: Math.random() * 100 + 'vh',
            scale: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            x: [
              Math.random() * 100 + 'vw',
              Math.random() * 100 + 'vw',
              Math.random() * 100 + 'vw'
            ],
            y: [
              Math.random() * 100 + 'vh',
              Math.random() * 100 + 'vh',
              Math.random() * 100 + 'vh'
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            width: Math.random() * 20 + 5 + 'px',
            height: Math.random() * 20 + 5 + 'px',
          }}
        />
      ))}
    </div>
  );
};

// Floating Elements Component
const FloatingElements = () => {
  return (
    <>
      <motion.div
        className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 blur-xl"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-24 h-24 rounded-full bg-gradient-to-r from-pink-500/10 to-orange-500/10 blur-xl"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-3/4 left-1/3 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-xl"
        animate={{
          y: [0, 15, -15, 0],
          x: [0, 10, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </>
  );
};

// Animated Shirt Icon
const AnimatedShirtIcon = () => (
  <motion.div
    animate={{
      rotateY: [0, 180, 360],
      scale: [1, 1.1, 1]
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  </motion.div>
);

export const metadata: Metadata = {
  title: `MSS Group BD - ${siteConfig.name}`,
  description: `Leading apparel manufacturer and retailer from Bangladesh - Quality, Innovation, Excellence`,
};

// Core Values with enhanced animations
const coreValues = [
  { 
    icon: <Rocket className="h-8 w-8" />, 
    text: 'Prosperity',
    gradient: "from-orange-500 to-yellow-500"
  },
  { 
    icon: <ShieldCheck className="h-8 w-8" />, 
    text: 'Reliability',
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    icon: <Zap className="h-8 w-8" />, 
    text: 'Innovation',
    gradient: "from-purple-500 to-pink-500"
  },
  { 
    icon: <Award className="h-8 w-8" />, 
    text: 'Integrity',
    gradient: "from-green-500 to-emerald-500"
  },
  { 
    icon: <Heart className="h-8 w-8" />, 
    text: 'Customer-Centric',
    gradient: "from-rose-500 to-red-500"
  },
  { 
    icon: <Leaf className="h-8 w-8" />, 
    text: 'Sustainability',
    gradient: "from-teal-500 to-green-500"
  },
  { 
    icon: <Gem className="h-8 w-8" />, 
    text: 'Excellence',
    gradient: "from-indigo-500 to-purple-500"
  },
];

// Product categories with descriptions
const productCategories = [
  {
    title: "Apparel Segments",
    items: ["Knitwear", "Woven", "Sweaters", "Denim", "Lingerie", "Tracksuits"],
    icon: <Layers3 className="h-6 w-6" />,
    color: "text-blue-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    title: "Clothing Categories",
    items: ["Menswear", "Womenswear", "Children's Wear", "Unisex", "Promotional"],
    icon: <Users2 className="h-6 w-6" />,
    color: "text-pink-500",
    bgGradient: "from-pink-500/10 to-rose-500/10"
  },
  {
    title: "Tops & Bottoms",
    items: ["T-Shirts", "Polo Shirts", "Jackets", "Dresses", "Pants", "Jumpers"],
    icon: <AnimatedShirtIcon />,
    color: "text-purple-500",
    bgGradient: "from-purple-500/10 to-violet-500/10"
  },
  {
    title: "Accessories",
    items: ["Caps", "Beanies", "Bags", "Wallets", "Belts", "Travel Bags"],
    icon: <Briefcase className="h-6 w-6" />,
    color: "text-amber-500",
    bgGradient: "from-amber-500/10 to-yellow-500/10"
  },
  {
    title: "Trims & Packaging",
    items: ["Labels", "Tags", "Hangers", "Poly Bags", "Cartons", "Thread"],
    icon: <Package className="h-6 w-6" />,
    color: "text-emerald-500",
    bgGradient: "from-emerald-500/10 to-green-500/10"
  },
  {
    title: "Footwear & Leather",
    items: ["Shoes", "Sandals", "Slippers", "Boots", "Leather Goods"],
    icon: <Footprints className="h-6 w-6" />,
    color: "text-orange-500",
    bgGradient: "from-orange-500/10 to-red-500/10"
  }
];

// Enhanced strengths with stats
const strengths = [
  { 
    icon: <CheckCircle2 className="h-8 w-8" />, 
    title: "Timely Delivery", 
    description: "99.7% on-time delivery rate",
    stat: "99.7%",
    color: "text-green-500"
  },
  { 
    icon: <Globe2 className="h-8 w-8" />, 
    title: "Global Reach", 
    description: "Serving 40+ countries worldwide",
    stat: "40+",
    color: "text-blue-500"
  },
  { 
    icon: <TrendingUp className="h-8 w-8" />, 
    title: "Growth", 
    description: "300% growth in last 3 years",
    stat: "300%",
    color: "text-purple-500"
  },
  { 
    icon: <Clock className="h-8 w-8" />, 
    title: "Fast Sampling", 
    description: "7-10 days for new samples",
    stat: "7-10 Days",
    color: "text-amber-500"
  },
  { 
    icon: <Palette className="h-8 w-8" />, 
    title: "Custom Designs", 
    description: "Unlimited customization options",
    stat: "∞",
    color: "text-pink-500"
  },
  { 
    icon: <FactoryIcon className="h-8 w-8" />, 
    title: "Production Capacity", 
    description: "1M+ pieces monthly capacity",
    stat: "1M+",
    color: "text-cyan-500"
  },
];

// Departments with icons
const departments = [
  { name: 'Marketing', icon: '📈' },
  { name: 'Merchandising', icon: '🛍️' },
  { name: 'Quality Assurance', icon: '✅' },
  { name: 'R&D', icon: '🔬' },
  { name: 'Sampling', icon: '✂️' },
  { name: 'Knitting', icon: '🧵' },
  { name: 'Dyeing', icon: '🎨' },
  { name: 'Cutting', icon: '✂️' },
  { name: 'Sewing', icon: '🧵' },
  { name: 'Printing', icon: '🖨️' },
  { name: 'Embroidery', icon: '🌸' },
  { name: 'Finishing', icon: '✨' },
];

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    } 
  }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: "backOut"
    }
  }
};

const stagger = { 
  visible: { 
    transition: { 
      staggerChildren: 0.2,
      delayChildren: 0.1
    } 
  } 
};

const floatAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

// Parallax Scrolling Section
const ParallaxSection = ({ children, speed = 0.5, className = "" }: any) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 50}%`]);
  
  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="relative">
        {children}
      </motion.div>
    </div>
  );
};

export default function CompanyPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <div className="bg-gradient-to-b from-background via-background/95 to-background" ref={containerRef}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Particle Background */}
      <ParticleBackground />
      <FloatingElements />

      {/* Hero with Parallax */}
      <ParallaxSection speed={0.3}>
        <header className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://picsum.photos/seed/fashion-factory/1920/1080?grayscale"
              alt="Modern apparel factory"
              fill
              className="object-cover filter brightness-40"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background/90" />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative container mx-auto px-4 md:px-6 z-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              className="inline-block mb-8"
            >
              <Sparkles className="h-16 w-16 text-primary/60 mx-auto" />
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                MSS
              </span>
              <span className="text-white"> Group BD</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-2xl md:text-3xl font-light text-white/90 mb-8 max-w-3xl mx-auto"
            >
              Where <span className="text-primary font-semibold">Innovation</span> Meets{' '}
              <span className="text-purple-400 font-semibold">Excellence</span> in Apparel Manufacturing
            </motion.p>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            >
              <ChevronRight className="h-10 w-10 text-white/60 rotate-90" />
            </motion.div>

            {/* Animated Stats */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto"
            >
              {[
                { value: '25+', label: 'Years Experience' },
                { value: '500+', label: 'Team Members' },
                { value: '1M+', label: 'Monthly Output' },
              ].map((stat, i) => (
                <motion.div key={i} variants={fadeUp} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </header>
      </ParallaxSection>

      {/* Who We Are - 3D Card Effect */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-50 group-hover:opacity-75 transition duration-1000" />
              <div className="relative bg-background rounded-3xl p-8 shadow-2xl">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="aspect-square rounded-2xl overflow-hidden"
                >
                  <Image
                    src="https://picsum.photos/seed/modern-office/800/800"
                    alt="Modern office"
                    width={800}
                    height={800}
                    className="object-cover w-full h-full"
                  />
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-8">
              <div className="space-y-4">
                <Badge className="px-4 py-2 bg-primary/10 text-primary border-primary/20">
                  SINCE 2005
                </Badge>
                <h2 className="text-5xl font-bold bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
                  Redefining Apparel Manufacturing
                </h2>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                MSS Group BD stands at the forefront of apparel innovation, blending traditional craftsmanship with cutting-edge technology to deliver exceptional quality across global markets.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t">
                <motion.div 
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <TargetIcon className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-bold">Vision</h3>
                  </div>
                  <p className="text-muted-foreground">
                    To be the world's most trusted apparel partner, setting new standards in quality and innovation.
                  </p>
                </motion.div>
                
                <motion.div 
                  variants={scaleIn}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/5 to-purple-500/10 border border-purple-500/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart className="h-8 w-8 text-purple-500" />
                    <h3 className="text-xl font-bold">Mission</h3>
                  </div>
                  <p className="text-muted-foreground">
                    To empower brands worldwide with sustainable, innovative, and ethically-produced apparel solutions.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Animated Core Values */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp}>
              <Badge className="px-4 py-2 mb-4 bg-gradient-to-r from-primary to-purple-500 text-white border-0">
                OUR PILLARS
              </Badge>
              <h2 className="text-5xl font-bold mb-4">Core Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every stitch, every innovation, and every partnership
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6"
          >
            {coreValues.map((value, index) => (
              <motion.div
                key={value.text}
                variants={fadeUp}
                whileHover={{ scale: 1.1, rotate: 5 }}
                onHoverStart={() => setHoveredCategory(index)}
                onHoverEnd={() => setHoveredCategory(null)}
                className="relative group cursor-pointer"
              >
                <AnimatePresence>
                  {hoveredCategory === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl blur-lg"
                    />
                  )}
                </AnimatePresence>
                
                <div className="relative bg-background rounded-2xl p-6 border border-border/50 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${value.gradient} mx-auto mb-4`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <p className="font-semibold text-lg">{value.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Product Showcase */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-5xl font-bold mb-4">Product Expertise</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive solutions across every apparel category
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {productCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.bgGradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <Card className={`relative p-6 border-2 border-transparent group-hover:border-primary/20 transition-all duration-300 ${hoveredCategory === index ? 'scale-105' : ''}`}>
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="flex items-center gap-3 text-2xl font-bold">
                      <span className={category.color}>{category.icon}</span>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <motion.div
                          key={item}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Badge 
                            variant="secondary" 
                            className="px-4 py-2 text-sm font-medium hover:bg-gradient-to-r hover:from-primary hover:to-purple-500 hover:text-white transition-all duration-300 cursor-pointer"
                          >
                            {item}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-5xl font-bold mb-4">Why Choose MSS</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Proven excellence backed by numbers
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {strengths.map((strength, index) => (
              <motion.div
                key={strength.title}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500" />
                
                <div className="relative bg-background rounded-2xl p-8 border border-border shadow-xl">
                  <div className="flex items-start gap-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 ${strength.color}`}>
                      {strength.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-2">
                        <h3 className="text-2xl font-bold">{strength.title}</h3>
                        <motion.span 
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className={`text-3xl font-black ${strength.color}`}
                        >
                          {strength.stat}
                        </motion.span>
                      </div>
                      <p className="text-muted-foreground">{strength.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Animated Departments Grid */}
      <section className="py-32">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-5xl font-bold mb-4">Specialized Departments</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Expert teams dedicated to excellence at every stage
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                variants={scaleIn}
                whileHover={{ scale: 1.05, rotateY: 180 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative h-32"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-2xl" />
                <div className="relative h-full flex flex-col items-center justify-center p-4 rounded-2xl border border-primary/10 bg-background hover:bg-gradient-to-br hover:from-primary/5 hover:via-primary/10 hover:to-primary/5 transition-all duration-300">
                  <motion.span 
                    animate={floatAnimation}
                    className="text-3xl mb-2"
                  >
                    {dept.icon}
                  </motion.span>
                  <span className="font-semibold text-center">{dept.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Commitment & Compliance - Glass Morphism */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-pink-500/10" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-5xl font-bold mb-4">Our Commitment</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ethical practices, sustainable growth, and uncompromising quality
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: <Scale className="h-12 w-12" />,
                title: "Legal Compliance",
                description: "Full adherence to international labor laws and trade regulations",
                gradient: "from-blue-500/20 to-cyan-500/20"
              },
              {
                icon: <HeartHandshake className="h-12 w-12" />,
                title: "Zero Child Labor",
                description: "Strict policies ensuring safe, ethical working environments",
                gradient: "from-green-500/20 to-emerald-500/20"
              },
              {
                icon: <Factory className="h-12 w-12" />,
                title: "Safety First",
                description: "State-of-the-art facilities with comprehensive safety systems",
                gradient: "from-orange-500/20 to-red-500/20"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl`} />
                
                <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-xl">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-4 right-4 h-16 w-16 rounded-full border-2 border-white/10"
                  />
                  
                  <div className="relative z-10 text-center">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/70">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/cta-bg/1920/1080?blur=2"
            alt="CTA Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-purple-900/90 to-background/90" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp}>
              <Sparkles className="h-16 w-16 mx-auto mb-8 text-white/60" />
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                Ready to Transform Your Apparel Business?
              </h2>
              <p className="text-xl mb-12 text-white/80">
                Join hundreds of satisfied brands worldwide who trust MSS Group BD for excellence
              </p>
            </motion.div>
            
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-white text-primary hover:bg-white/90 h-11 rounded-md px-8"
              >
                Get a Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-white bg-transparent text-white hover:bg-white/10 h-11 rounded-md px-8"
              >
                Explore Services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
