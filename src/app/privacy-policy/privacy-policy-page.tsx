
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  ShieldCheck,
  Info,
  Share2,
  Cookie,
  Database,
  Lock,
  UserCog,
  Link as LinkIcon,
  Globe,
  RefreshCw,
  Mail,
  Lightbulb,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';


const policySections = [
  {
    icon: <Info className="h-5 w-5 text-primary" />,
    title: '1. Information We Collect',
    content: (
      <>
        <p>We may collect the following types of information:</p>
        <h3 className="font-semibold mt-4 mb-2 text-foreground">a) Personal Information You Provide</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Name, email address, phone number, shipping and billing addresses.</li>
          <li>Payment details, such as credit/debit card information or payment service account (handled securely).</li>
          <li>Account login credentials if you create an account.</li>
          <li>Feedback, reviews, or messages sent through our website.</li>
        </ul>
        <h3 className="font-semibold mt-4 mb-2 text-foreground">b) Information About Your Use of Our Website</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>IP address, browser type, device type, and operating system.</li>
          <li>Pages viewed, products browsed, time spent on the site, and click patterns.</li>
          <li>Cookies and similar tracking technologies for a smoother shopping experience.</li>
        </ul>
        <h3 className="font-semibold mt-4 mb-2 text-foreground">c) Other Information</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Information you voluntarily provide through forms, newsletters, contests, or surveys.</li>
        </ul>
      </>
    ),
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-primary" />,
    title: '2. How We Use Your Information',
    content: (
      <>
        <p>We use your information to:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Process and fulfill your orders, including payment, delivery, and customer support.</li>
          <li>Personalize your shopping experience and show relevant products.</li>
          <li>Send order updates, promotions, newsletters, and other marketing communications (with your consent).</li>
          <li>Analyze website traffic and improve our services.</li>
          <li>Protect against fraud, unauthorized transactions, or illegal activities.</li>
        </ul>
      </>
    ),
  },
  {
    icon: <Share2 className="h-5 w-5 text-primary" />,
    title: '3. Sharing Your Information',
    content: (
      <>
        <p>We do not sell your personal information. We may share your data in the following situations:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>With service providers or partners helping us with delivery, payment processing, IT services, and marketing.</li>
            <li>If required by law or legal procedures.</li>
            <li>To protect our rights, property, or safety, or that of our customers and employees.</li>
            <li>In connection with a merger, acquisition, or sale of our business assets.</li>
        </ul>
        <p className="mt-4">All partners and service providers are required to handle your information securely and in compliance with this Privacy Policy.</p>
      </>
    ),
  },
  {
    icon: <Cookie className="h-5 w-5 text-primary" />,
    title: '4. Cookies and Tracking',
    content: (
      <>
        <p>Our website uses cookies and similar technologies to:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Improve website performance and functionality.</li>
            <li>Remember your preferences and shopping cart items.</li>
            <li>Deliver personalized content and advertisements.</li>
        </ul>
        <p className="mt-4">You can manage cookies through your browser settings, but some features may not work properly if disabled.</p>
      </>
    ),
  },
  {
    icon: <Lock className="h-5 w-5 text-primary" />,
    title: '5. Data Security',
    content: (
      <>
        <p>We implement strong security measures to protect your information, including:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Encrypted connections (HTTPS) for data transmission.</li>
            <li>Secure servers with restricted access.</li>
            <li>Continuous monitoring and regular security assessments.</li>
        </ul>
        <p className="mt-4">While we strive for maximum protection, no system is completely foolproof.</p>
      </>
    ),
  },
  {
    icon: <Database className="h-5 w-5 text-primary" />,
    title: '6. Retention of Your Data',
    content: (
      <>
        <p>We retain your personal information only as long as necessary to:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Complete transactions and provide services.</li>
            <li>Comply with legal obligations.</li>
            <li>Resolve disputes and enforce agreements.</li>
        </ul>
        <p className="mt-4">After this, your information will be securely deleted or anonymized.</p>
      </>
    ),
  },
  {
    icon: <UserCog className="h-5 w-5 text-primary" />,
    title: '7. Your Rights',
    content: (
      <>
        <p>You have the right to:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>Access, correct, or update your personal information.</li>
            <li>Request deletion or restriction of your data.</li>
            <li>Opt-out of marketing emails or promotions.</li>
        </ul>
        <p className="mt-4">To exercise these rights, contact us at info@mssgroupbd.com.</p>
      </>
    ),
  },
  {
    icon: <LinkIcon className="h-5 w-5 text-primary" />,
    title: '8. Third-Party Links',
    content: (
      <p>Our website may link to other websites. MSS Group is not responsible for the privacy practices of external sites. We encourage you to review their privacy policies.</p>
    ),
  },
  {
    icon: <Globe className="h-5 w-5 text-primary" />,
    title: '9. International Transfers',
    content: (
      <p>If your information is processed outside Bangladesh, we ensure it receives an adequate level of protection in line with data protection laws.</p>
    ),
  },
  {
    icon: <RefreshCw className="h-5 w-5 text-primary" />,
    title: '10. Policy Updates',
    content: (
      <p>We may update this Privacy Policy periodically. Updates will be posted on this page with the new effective date. Please check back occasionally to stay informed.</p>
    ),
  },
];

const keyHighlights = [
    "We collect personal and usage data to process orders and improve our service.",
    "We do not sell your personal data. We only share it with trusted partners for essential services.",
    "We use strong security measures to protect your information.",
    "You have the right to access, update, and delete your data at any time."
]

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};


export default function PrivacyPolicyPageComponent() {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="bg-background min-h-screen">
      <motion.header variants={fadeUp} className="bg-secondary/50 border-b">
        <div className="container mx-auto px-4 md:px-6 py-16 text-center">
             <span className="text-primary font-semibold uppercase tracking-wider font-headline">Privacy Policy</span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold font-headline text-foreground tracking-tight">
                Your Privacy Matters to Us
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
        </div>
      </motion.header>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={stagger}
        className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Sidebar */}
            <motion.div variants={stagger} className="space-y-8 lg:mt-0">
                 <motion.div variants={fadeUp}>
                    <Card className="bg-secondary/30">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 font-headline text-xl">
                                <Lightbulb className="h-6 w-6 text-primary" />
                                <span>Key Highlights</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3">
                                {keyHighlights.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <ShieldCheck className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span className="text-sm text-muted-foreground">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                 </motion.div>

                <motion.div variants={fadeUp}>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 font-headline text-xl">
                                <Mail className="h-6 w-6 text-primary" />
                                <span>Contact Us</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground mb-4">
                                Have questions about your data? Reach out to our privacy team.
                            </p>
                            <Button asChild className="w-full">
                                <Link href="mailto:info@mssgroupbd.com">
                                    Email: info@mssgroupbd.com
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
            
            {/* Main Content */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className='font-headline text-2xl'>
                            Our Commitment to Your Privacy
                        </CardTitle>
                        <CardDescription>
                            At MSS Group, we value your trust and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            {policySections.map((section, index) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger className="text-lg hover:no-underline font-semibold">
                                        <div className="flex items-center gap-4">
                                            {section.icon}
                                            <span>{section.title}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="prose prose-sm max-w-none pl-14 text-muted-foreground dark:prose-invert">
                                        {section.content}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
