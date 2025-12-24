
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ShieldCheck,
  Heart,
  Users,
  Gem,
  Award,
  Zap,
  Leaf,
  Factory,
  BarChart,
  Target,
  Rocket,
  Scale,
  Briefcase,
  Layers3,
  Package,
  Footprints,
  HeartHandshake,
  Sparkles,
  TrendingUp,
  Clock,
  Palette,
  Globe2,
  Users2,
  CheckCircle2,
} from 'lucide-react';
import Link from 'next/link';

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

const coreValues = [
  { icon: <Rocket className="h-8 w-8" />, text: 'Prosperity' },
  { icon: <ShieldCheck className="h-8 w-8" />, text: 'Reliability' },
  { icon: <Zap className="h-8 w-8" />, text: 'Innovation' },
  { icon: <Award className="h-8 w-8" />, text: 'Integrity' },
  { icon: <Heart className="h-8 w-8" />, text: 'Customer-Centric' },
  { icon: <Leaf className="h-8 w-8" />, text: 'Sustainability' },
  { icon: <Gem className="h-8 w-8" />, text: 'Excellence' },
];

const productCategories = [
  {
    title: "Apparel Segments",
    items: ["Knitwear", "Woven", "Sweaters", "Denim", "Lingerie", "Tracksuits"],
    icon: <Layers3 className="h-6 w-6" />,
  },
  {
    title: "Clothing Categories",
    items: ["Menswear", "Womenswear", "Children's Wear", "Unisex", "Promotional"],
    icon: <Users2 className="h-6 w-6" />,
  },
  {
    title: "Tops & Bottoms",
    items: ["T-Shirts", "Polo Shirts", "Jackets", "Dresses", "Pants", "Jumpers"],
    icon: <AnimatedShirtIcon />,
  },
  {
    title: "Accessories",
    items: ["Caps", "Beanies", "Bags", "Wallets", "Belts", "Travel Bags"],
    icon: <Briefcase className="h-6 w-6" />,
  },
  {
    title: "Trims & Packaging",
    items: ["Labels", "Tags", "Hangers", "Poly Bags", "Cartons", "Thread"],
    icon: <Package className="h-6 w-6" />,
  },
  {
    title: "Footwear & Leather",
    items: ["Shoes", "Sandals", "Slippers", "Boots", "Leather Goods"],
    icon: <Footprints className="h-6 w-6" />,
  }
];

const strengths = [
  { icon: <CheckCircle2 className="h-8 w-8" />, title: "Timely Delivery", description: "99.7% on-time delivery rate", stat: "99.7%" },
  { icon: <Globe2 className="h-8 w-8" />, title: "Global Reach", description: "Serving 40+ countries worldwide", stat: "40+" },
  { icon: <TrendingUp className="h-8 w-8" />, title: "Growth", description: "300% growth in last 3 years", stat: "300%" },
  { icon: <Clock className="h-8 w-8" />, title: "Fast Sampling", description: "7-10 days for new samples", stat: "7-10 Days" },
  { icon: <Palette className="h-8 w-8" />, title: "Custom Designs", description: "Unlimited customization options", stat: "∞" },
  { icon: <Factory className="h-8 w-8" />, title: "Production Capacity", description: "1M+ pieces monthly capacity", stat: "1M+" },
];

const departments = [
  'Marketing', 'Merchandising', 'Quality Assurance', 'R&D', 'Sampling', 
  'Knitting', 'Dyeing', 'Cutting', 'Sewing', 'Printing', 'Embroidery', 'Finishing'
];

const complianceItems = [
  { icon: <Scale className="h-10 w-10" />, title: "Legal Compliance", description: "Full adherence to international labor laws and trade regulations." },
  { icon: <HeartHandshake className="h-10 w-10" />, title: "Zero Child Labor", description: "Strict policies ensuring safe, ethical working environments." },
  { icon: <Factory className="h-10 w-10" />, title: "Safety First", description: "State-of-the-art facilities with comprehensive safety systems." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function CompanyPageComponent() {

  return (
    <div className="bg-background text-foreground">
      
      {/* Hero Section */}
      <header className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/factory-floor/1920/1080"
            alt="Modern apparel factory floor"
            fill
            className="object-cover filter brightness-50"
            priority
            data-ai-hint="factory floor"
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
            MSS Group BD
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto">
            A Trusted Manufacturer and Retailer of Apparel
          </motion.p>
        </motion.div>
      </header>

      {/* Who We Are Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <Card className="grid lg:grid-cols-2 overflow-hidden shadow-2xl bg-card">
              <div className="relative min-h-[400px] lg:min-h-0">
                 <Image
                    src="https://picsum.photos/seed/fashion-design/800/1000"
                    alt="Fashion design sketches"
                    fill
                    className="object-cover"
                    data-ai-hint="fashion design"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-primary font-semibold uppercase tracking-wider">Who We Are</span>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-2">Redefining Apparel Manufacturing</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  MSS Group BD is a leading apparel manufacturer and retailer based in Bangladesh, established in 2025. We specialize in delivering high-quality clothing solutions to international and domestic markets, providing end-to-end services including product sourcing, design, manufacturing, and delivery.
                </p>
                <div className="grid sm:grid-cols-2 gap-6 pt-6 mt-6 border-t">
                  <div className="flex items-start gap-3">
                    <Target className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">Vision</h3>
                      <p className="text-muted-foreground mt-1 text-sm">To become a trusted and customer-focused apparel brand recognized for quality, transparency, and innovation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <BarChart className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold">Mission</h3>
                      <p className="text-muted-foreground mt-1 text-sm">To provide reliable, transparent, and customized clothing solutions for businesses and individual clients.</p>
                    </div>
                  </div>
                </div>
              </div>
          </Card>
        </div>
      </section>
      
      {/* Core Values Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every stitch, every innovation, and every partnership we build.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 mt-16"
            style={{ perspective: 1000 }}
          >
            {coreValues.map((value) => (
              <motion.div key={value.text} variants={fadeUp} className="flex flex-col items-center gap-4">
                <motion.div 
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary shadow-lg border"
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-primary">{value.icon}</div>
                </motion.div>
                <p className="font-semibold text-center text-sm">{value.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Expertise Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Product Expertise & Categories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Comprehensive solutions across a wide spectrum of apparel and accessories.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {productCategories.map((category) => (
              <motion.div key={category.title} variants={fadeUp}>
                <Card className="p-6 h-full shadow-md hover:shadow-xl hover:-translate-y-1 transition-all bg-background">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="flex items-center gap-3 text-xl font-bold">
                      <span className="text-primary">{category.icon}</span>
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <Badge key={item} variant="secondary" className="font-normal">{item}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose MSS Group BD</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Proven excellence backed by numbers and a commitment to quality.</p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {strengths.map((strength) => (
              <motion.div key={strength.title} variants={fadeUp}>
                <Card className="p-6 text-center h-full flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-all bg-secondary/30">
                  <div className="flex-shrink-0 text-primary mb-4">{strength.icon}</div>
                  <h3 className="text-xl font-bold">{strength.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm flex-grow">{strength.description}</p>
                   <div className="text-3xl font-black text-primary mt-4">{strength.stat}</div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl font-bold mb-4">Our Specialized Departments</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert teams dedicated to excellence at every stage of the supply chain.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="flex flex-wrap justify-center gap-3 mt-12"
          >
            {departments.map((dept) => (
              <motion.div key={dept} variants={fadeUp} whileHover={{ y: -4 }}>
                <Badge variant="outline" className="text-base px-4 py-2 rounded-lg cursor-default bg-background">{dept}</Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Commitment & Compliance Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <Card className="grid lg:grid-cols-2 overflow-hidden shadow-2xl bg-card">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="text-primary font-semibold uppercase tracking-wider">Commitment</span>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mt-2">Ethical & Compliant Manufacturing</h2>
                <p className="text-lg text-muted-foreground mt-4">Ethical practices, sustainable growth, and uncompromising quality form the bedrock of our operations.</p>
                <div className="space-y-6 pt-6 mt-6 border-t">
                  {complianceItems.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 text-primary mt-1">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative min-h-[400px] lg:min-h-0">
                 <Image
                    src="https://picsum.photos/seed/ethical-factory/800/800"
                    alt="Workers in an ethical factory"
                    fill
                    className="object-cover"
                    data-ai-hint="ethical factory"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
              </div>
          </Card>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="bg-primary text-primary-foreground rounded-2xl p-12 text-center shadow-2xl overflow-hidden relative">
             <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)]"></div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="relative z-10"
            >
              <motion.div variants={fadeUp}>
                <Sparkles className="h-12 w-12 mx-auto mb-4" />
                <h2 className="text-4xl font-bold mb-4">
                  Ready to Transform Your Apparel Business?
                </h2>
                <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
                  Join hundreds of satisfied brands worldwide who trust MSS Group BD for excellence.
                </p>
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                 <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-11 px-8"
                  >
                    <Link href="/contact">Get a Quote</Link>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-primary-foreground bg-transparent hover:bg-primary-foreground/10 h-11 px-8"
                  >
                    <Link href="/products">Explore Services</Link>
                  </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
