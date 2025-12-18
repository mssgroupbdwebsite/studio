
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
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
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: `Privacy Policy - ${siteConfig.name}`,
  description: `Privacy Policy for ${siteConfig.name}`,
};

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

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen">
      <header className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 md:px-6 py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary tracking-tight">
                Privacy Policy
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <Card className="max-w-4xl mx-auto animate-in fade-in duration-500">
            <CardHeader>
                <CardTitle className='font-headline text-2xl'>
                    Your Privacy Matters to Us
                </CardTitle>
                <p className="text-muted-foreground pt-2">
                    At MSS Group, we value your trust and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data.
                </p>
            </CardHeader>
            <CardContent>
                 <Accordion type="single" collapsible className="w-full">
                    {policySections.map((section, index) => (
                        <AccordionItem value={`item-${index}`} key={index}>
                            <AccordionTrigger className="text-lg hover:no-underline">
                                <div className="flex items-center gap-4">
                                    {section.icon}
                                    <span className='font-semibold'>{section.title}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="prose prose-sm dark:prose-invert max-w-none pl-14 text-muted-foreground">
                                {section.content}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
