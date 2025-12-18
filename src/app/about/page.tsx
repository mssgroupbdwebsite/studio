
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  Footprints
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const metadata: Metadata = {
  title: `Company - ${siteConfig.name}`,
  description: `Learn more about ${siteConfig.name}, a trusted manufacturer and retailer of apparel based in Bangladesh.`,
};

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
}

const categoryIcons = {
    "Apparel Segments": <Layers3 className="h-5 w-5" />,
    "Clothing Categories": <Users className="h-5 w-5" />,
    "Tops & Bottoms": <ShirtIcon className="h-5 w-5" />,
    "Accessories": <Briefcase className="h-5 w-5" />,
    "Trims & Packaging": <Package className="h-5 w-5" />,
    "Footwear & Leather": <Footprints className="h-5 w-5" />,
}

const strengths = [
  { icon: <CheckCircle />, title: "Timely & Competitive", description: "High-quality products, on time and at competitive prices." },
  { icon: <GitCommit />, title: "Full Transparency", description: "Complete client involvement in all production stages." },
  { icon: <Globe />, title: "Global Standards", description: "Skilled professionals knowledgeable in international standards." },
  { icon: <Users />, title: "Strong Sourcing", description: "Vast network across Bangladesh and neighboring countries." },
  { icon: <PenTool />, title: "In-House Development", description: "Expertise in sampling, pattern making, and product development." },
  { icon: <Star />, title: "Customization Expertise", description: "Specializing in high-fashion, custom embroidery, and printing." },
];

const departments = [
    'Marketing', 'Merchandising', 'Accounts & Commercial', 'Sampling', 
    'Quality Assurance', 'R&D', 'Accessories', 'Knitting', 'Dyeing', 
    'Cutting', 'Sewing', 'Printing', 'Embroidery', 'Finishing'
];

export default function CompanyPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <header className="bg-secondary/50 border-b">
        <div className="container mx-auto px-4 md:px-6 py-16 text-center">
            <h1 className="mt-2 text-4xl md:text-5xl font-bold font-headline text-foreground tracking-tight">
                About MSS Group BD
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A Trusted Manufacturer and Retailer of Apparel
            </p>
        </div>
      </header>

      {/* Core Values Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center max-w-3xl mx-auto">
                <span className="text-primary font-semibold uppercase tracking-wider font-headline">Our Foundation</span>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">Core Values</h2>
                <p className="mt-4 text-lg text-muted-foreground">The principles that guide every decision we make.</p>
            </div>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 text-center">
                {coreValues.map((value) => (
                    <div key={value.text} className="flex flex-col items-center gap-3">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                            {value.icon}
                        </div>
                        <p className="font-semibold">{value.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Who We Are, Vision, Mission */}
      <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                  <div className="space-y-8">
                       <div>
                          <h3 className="text-2xl md:text-3xl font-bold font-headline text-primary tracking-tight">Who We Are</h3>
                          <p className="mt-4 text-muted-foreground">MSS Group BD is a leading apparel manufacturer and retailer based in Bangladesh, established in 2025. We specialize in delivering high-quality clothing solutions to international and domestic markets, providing end-to-end services including product sourcing, design, manufacturing, and delivery.</p>
                          <p className="mt-2 text-muted-foreground">Our team is committed to professional service, quality control, and timely delivery. By staying aligned with global fashion trends and customer preferences, we ensure our products are always relevant, stylish, and reliable. MSS Group BD combines flexibility in production with rigorous quality standards to consistently exceed client expectations.</p>
                       </div>
                       <div className="grid sm:grid-cols-2 gap-8">
                            <div>
                                <h4 className="flex items-center gap-3 text-xl font-bold font-headline text-foreground"><Target/> Vision</h4>
                                <p className="mt-2 text-muted-foreground">To become a trusted and customer-focused apparel brand recognized for quality, transparency, and innovation. We aim to simplify apparel manufacturing and retail while delivering long-term value and satisfaction to our clients.</p>
                            </div>
                            <div>
                                <h4 className="flex items-center gap-3 text-xl font-bold font-headline text-foreground"><BarChart/> Mission</h4>
                                <p className="mt-2 text-muted-foreground">To provide reliable, transparent, and customized clothing solutions for businesses and individual clients. We focus on delivering products that meet market demands, maintain international quality standards, and support clients’ goals.</p>
                            </div>
                       </div>
                  </div>
                   <div className="relative aspect-square md:aspect-[4/3.5] rounded-lg overflow-hidden group">
                        <Image
                            src="https://picsum.photos/seed/about-us/800/600"
                            alt="MSS Group office"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            data-ai-hint="modern office"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
              </div>
          </div>
      </section>

      {/* Product Expertise */}
      <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
               <div className="text-center max-w-3xl mx-auto">
                    <span className="text-primary font-semibold uppercase tracking-wider font-headline">What We Make</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">Product Expertise & Categories</h2>
                    <p className="mt-4 text-lg text-muted-foreground">A diverse range of apparel and accessories to meet every market need.</p>
                </div>
                <div className="mt-12">
                    <Tabs defaultValue={Object.keys(productCategories)[0]} className="w-full">
                        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 h-auto">
                            {Object.entries(categoryIcons).map(([category]) => (
                               <TabsTrigger key={category} value={category} className="flex gap-2">
                                 {categoryIcons[category as keyof typeof categoryIcons]}
                                 {category}
                               </TabsTrigger>
                            ))}
                        </TabsList>
                        {Object.entries(productCategories).map(([category, items]) => (
                            <TabsContent key={category} value={category} className="mt-8">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex flex-wrap gap-3">
                                            {items.map(item => (
                                                <Badge key={item} variant="secondary" className="text-base px-4 py-1">{item}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
          </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
               <div className="text-center max-w-3xl mx-auto">
                    <span className="text-primary font-semibold uppercase tracking-wider font-headline">Our Advantage</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">Why Choose MSS Group BD</h2>
                    <p className="mt-4 text-lg text-muted-foreground">Delivering excellence through our core operational strengths and unwavering commitment.</p>
                </div>

                <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {strengths.map(strength => (
                        <Card key={strength.title} className="p-6 text-center flex flex-col items-center">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                                {strength.icon}
                            </div>
                            <h3 className="font-headline text-xl font-bold">{strength.title}</h3>
                            <p className="mt-2 text-muted-foreground flex-grow">{strength.description}</p>
                        </Card>
                    ))}
                </div>

                 <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="space-y-2">
                        <h4 className="font-headline text-lg font-semibold">Technological Advantage</h4>
                        <p className="text-muted-foreground">Our facilities use advanced machinery from Europe and the USA for precision, efficiency, and superior quality.</p>
                    </div>
                     <div className="space-y-2">
                        <h4 className="font-headline text-lg font-semibold">Sustainability</h4>
                        <p className="text-muted-foreground">We integrate sustainable practices across our operations, maintaining safety, compliance, and responsible manufacturing.</p>
                    </div>
                     <div className="space-y-2">
                        <h4 className="font-headline text-lg font-semibold">Cost & Quality Advantage</h4>
                        <p className="text-muted-foreground">Bangladesh’s competitive ecosystem allows us to deliver high-quality products at optimal costs without compromise.</p>
                    </div>
                 </div>

          </div>
      </section>

       {/* Our Culture */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-last lg:order-first">
                    <span className="text-primary font-semibold uppercase tracking-wider font-headline">Our Environment</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">Our Story & Culture</h2>
                    <p className="mt-4 text-muted-foreground">Since our inception, we have focused on delivering quality, reliability, and customer satisfaction. Our experienced team ensures the right products reach the right customers at the right time, adhering to global quality standards and ethical practices.</p>
                    <p className="mt-4 text-muted-foreground">Our culture is built on clear values, ethics, and continuous improvement, fostering an environment of innovation, empowerment, and respect.</p>
                </div>
                 <div className="relative aspect-square md:aspect-[4/3.5] rounded-lg overflow-hidden group">
                    <Image
                        src="https://picsum.photos/seed/culture/800/600"
                        alt="MSS Group Team"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint="diverse team"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Commitment & Compliance */}
      <section className="bg-secondary/50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
              <div className="text-center max-w-3xl mx-auto">
                <span className="text-primary font-semibold uppercase tracking-wider font-headline">Our Promise</span>
                <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">Commitment & Compliance</h2>
                <p className="mt-4 text-lg text-muted-foreground">Upholding the highest standards of ethical conduct, safety, and legal compliance in all our operations.</p>
              </div>
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <Card className="p-6">
                      <CardHeader className="p-0">
                          <CardTitle className="flex items-center gap-3 font-headline text-lg"><Scale/> Legal & Ethical Compliance</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 pt-2">
                          <p className="text-muted-foreground text-sm">All production units comply with labor laws and international standards.</p>
                      </CardContent>
                  </Card>
                   <Card className="p-6">
                      <CardHeader className="p-0">
                          <CardTitle className="flex items-center gap-3 font-headline text-lg"><ShieldCheck/> Child Labor Policy</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 pt-2">
                          <p className="text-muted-foreground text-sm">No child labor; workers’ safety, education, and well-being are fully protected.</p>
                      </CardContent>
                  </Card>
                   <Card className="p-6">
                      <CardHeader className="p-0">
                          <CardTitle className="flex items-center gap-3 font-headline text-lg"><Factory/> Building & Fire Safety</CardTitle>
                      </CardHeader>
                      <CardContent className="p-0 pt-2">
                          <p className="text-muted-foreground text-sm">Factories equipped with secure exits, alarms, and firefighting systems.</p>
                      </CardContent>
                  </Card>
              </div>
          </div>
      </section>

      {/* Departments */}
      <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
               <div className="text-center max-w-3xl mx-auto">
                    <span className="text-primary font-semibold uppercase tracking-wider font-headline">Our Structure</span>
                    <h2 className="mt-2 text-3xl md:text-4xl font-bold font-headline text-foreground tracking-tight">Our Departments</h2>
                    <p className="mt-4 text-lg text-muted-foreground">The specialized teams that power our end-to-end apparel solutions.</p>
                </div>
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                    {departments.map(dept => (
                        <Badge key={dept} variant="outline" className="text-lg px-5 py-2 border-primary/50 text-primary">{dept}</Badge>
                    ))}
                </div>
          </div>
      </section>
    </div>
  );
}

// Dummy icon for Shirt
const ShirtIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
  </svg>
);

    