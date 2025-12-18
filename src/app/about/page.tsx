import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
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
} from 'lucide-react';

// Dummy shirt icon
const ShirtIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
  </svg>
);

export const metadata: Metadata = {
  title: `Company - ${siteConfig.name}`,
  description: `Learn more about ${siteConfig.name}, a trusted manufacturer and retailer of apparel based in Bangladesh.`,
};

// Core values, product categories, icons, strengths, departments
const coreValues = [
  { icon: <Rocket className="h-8 w-8" />, text: 'Prosperity' },
  { icon: <ShieldCheck className="h-8 w-8" />, text: 'Reliability' },
  { icon: <Zap className="h-8 w-8" />, text: 'Innovation' },
  { icon: <Award className="h-8 w-8" />, text: 'Integrity' },
  { icon: <Heart className="h-8 w-8" />, text: 'Customer-Centric' },
  { icon: <Leaf className="h-8 w-8" />, text: 'Sustainability' },
  { icon: <Gem className="h-8 w-8" />, text: 'Excellence' },
];

const productCategories = {
  "Apparel Segments": ["Knitwear", "Woven", "Sweaters", "Denim", "Lingerie", "Tracksuits", "Casual Wear", "Formal Wear", "Sportswear", "Workwear", "Sleepwear"],
  "Clothing Categories": ["Menswear", "Womenswear", "Children’s Wear", "Newborn", "Unisex", "Promotional Textiles"],
  "Tops & Bottoms": ["T-Shirts", "Polo Shirts", "Shirts", "Jackets", "Sweatshirts", "Joggers", "Blouses", "Dresses", "Leggings", "Pants", "Jumpers"],
  "Accessories": ["Caps", "Beanies", "Towels", "Wallets", "Belts", "Bags", "Handbags", "Travel Bags"],
  "Trims & Packaging": ["Sewing Thread", "Labels", "Tags", "Hangers", "Poly Bags", "Tissue Paper", "Cartons", "Packaging Materials"],
  "Footwear & Leather": ["Shoes", "Sandals", "Slippers", "Boots"]
};

const categoryIcons = {
  "Apparel Segments": <Layers3 className="h-5 w-5" />,
  "Clothing Categories": <Users className="h-5 w-5" />,
  "Tops & Bottoms": <ShirtIcon className="h-5 w-5" />,
  "Accessories": <Briefcase className="h-5 w-5" />,
  "Trims & Packaging": <Package className="h-5 w-5" />,
  "Footwear & Leather": <Footprints className="h-5 w-5" />
};

const strengths = [
  { icon: <CheckCircle className="h-6 w-6 text-primary" />, title: "Timely & Competitive", description: "High-quality products, on time and at competitive prices." },
  { icon: <GitCommit className="h-6 w-6 text-primary" />, title: "Full Transparency", description: "Complete client involvement in all production stages." },
  { icon: <Globe className="h-6 w-6 text-primary" />, title: "Global Standards", description: "Skilled professionals knowledgeable in international standards." },
  { icon: <Users className="h-6 w-6 text-primary" />, title: "Strong Sourcing", description: "Vast network across Bangladesh and neighboring countries." },
  { icon: <PenTool className="h-6 w-6 text-primary" />, title: "In-House Development", description: "Expertise in sampling, pattern making, and product development." },
  { icon: <Star className="h-6 w-6 text-primary" />, title: "Customization Expertise", description: "Specializing in high-fashion, custom embroidery, and printing." },
];

const departments = [
  'Marketing', 'Merchandising', 'Accounts & Commercial', 'Sampling',
  'Quality Assurance', 'R&D', 'Accessories', 'Knitting', 'Dyeing',
  'Cutting', 'Sewing', 'Printing', 'Embroidery', 'Finishing'
];

export default function CompanyPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <header className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://picsum.photos/seed/company-hero/1800/1200"
            alt="Apparel factory"
            fill
            className="object-cover filter brightness-75"
            priority
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative container mx-auto px-4 md:px-6 text-white"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight drop-shadow-lg">
            MSS Group BD
          </h1>
          <p className="mt-4 text-xl md:text-2xl drop-shadow-md">
            Trusted Manufacturer & Retailer of Apparel
          </p>
        </motion.div>
      </header>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-r from-purple-100/50 via-pink-50/50 to-yellow-50/50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Core Values</h2>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8"
          >
            {coreValues.map(value => (
              <motion.div key={value.text} variants={fadeUp} className="flex flex-col items-center gap-3">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg text-primary hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <p className="font-semibold">{value.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Product Expertise</h2>
          <p className="text-lg text-muted-foreground mb-12">A diverse range of apparel and accessories for every market.</p>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {Object.keys(productCategories).map(category => (
              <motion.div key={category} variants={fadeUp}>
                <Card className="p-6 hover:shadow-2xl transition-shadow hover:scale-105 duration-500">
                  <CardHeader className="p-0">
                    <CardTitle className="flex items-center gap-3 text-xl font-bold">
                      {categoryIcons[category as keyof typeof categoryIcons]} {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 pt-4 flex-wrap flex gap-2">
                    {(productCategories as any)[category].map((item: string) => (
                      <Badge key={item} variant="secondary" className="px-3 py-1 hover:bg-primary hover:text-white transition-colors">
                        {item}
                      </Badge>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
