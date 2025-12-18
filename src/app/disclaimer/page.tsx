
import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  AlertTriangle,
  Link as LinkIcon,
  Package,
  CheckSquare,
  RefreshCw,
  Lightbulb,
  Mail,
  ShieldAlert,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: `Disclaimer - ${siteConfig.name}`,
  description: `Disclaimer for ${siteConfig.name}`,
};

const disclaimerSections = [
  {
    icon: <AlertTriangle className="h-5 w-5 text-primary" />,
    title: '1. No Warranties',
    content: (
      <>
        <p>While we strive to provide accurate, up-to-date, and reliable information about our products, services, and website content, MSS Group BD makes no warranties or guarantees regarding the completeness, accuracy, or reliability of any information presented.</p>
        <p className="mt-2">Any action you take based on information found on our website, including making purchases, contacting suppliers, or using product information, is strictly at your own risk. MSS Group BD will not be liable for any losses, damages, or issues arising from your use of our website or services.</p>
      </>
    ),
  },
  {
    icon: <LinkIcon className="h-5 w-5 text-primary" />,
    title: '2. External Links',
    content: (
       <>
        <p>Our website may contain links to external websites for your convenience, including partner stores, suppliers, or informational resources. These links are provided for informational purposes only.</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>We have no control over the content, quality, or accuracy of external sites.</li>
          <li>The presence of a link does not imply endorsement or recommendation of the linked site or its content.</li>
          <li>Content on external websites may change at any time without notice, and we are not responsible for removing outdated or “bad” links.</li>
        </ul>
        <p className="mt-4">When you leave our website, other sites may have different privacy policies, terms of service, and practices. Please review their policies before providing any personal information or making purchases.</p>
      </>
    ),
  },
  {
    icon: <Package className="h-5 w-5 text-primary" />,
    title: '3. Product Information Disclaimer',
    content: (
      <ul className="list-disc pl-5 space-y-1">
          <li>Product images, colors, and descriptions are intended to be accurate but may vary due to device screens, lighting, or manufacturing differences.</li>
          <li>Prices, availability, and promotions are subject to change without prior notice.</li>
        </ul>
    ),
  },
  {
    icon: <CheckSquare className="h-5 w-5 text-primary" />,
    title: '4. Consent',
    content: (
      <p>By using the MSS Group BD website, you acknowledge and agree to this Disclaimer. Your continued use of our website constitutes your consent to all terms outlined herein.</p>
    ),
  },
    {
    icon: <RefreshCw className="h-5 w-5 text-primary" />,
    title: '5. Updates to Disclaimer',
    content: (
      <p>We may update, amend, or make changes to this Disclaimer from time to time. Any updates will be posted on this page with the effective date clearly stated.</p>
    ),
  },
];

const keyHighlights = [
    "Information is for general purposes only; use it at your own risk.",
    "We are not responsible for the content of external websites linked from our site.",
    "Product details like price and availability are subject to change.",
    "Your use of the site signifies your consent to this disclaimer."
]

export default function DisclaimerPage() {
  return (
    <div className="bg-background min-h-screen">
      <header className="bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 md:px-6 py-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary tracking-tight">
                Disclaimer
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
        </div>
      </header>

      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 animate-in fade-in duration-500">
            {/* Sidebar */}
            <div className="space-y-8 lg:mt-0">
                 <Card className="bg-muted/30">
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
                                    <ShieldAlert className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-muted-foreground">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 font-headline text-xl">
                            <Mail className="h-6 w-6 text-primary" />
                            <span>Contact Us</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                            If you have any questions about this disclaimer, please contact us.
                        </p>
                        <Button asChild className="w-full">
                            <Link href="mailto:info@mssgroupbd.com">
                                Email: info@mssgroupbd.com
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2">
                <Card>
                    <CardHeader>
                        <CardTitle className='font-headline text-2xl'>
                            General Information & Terms of Use
                        </CardTitle>
                        <CardDescription>
                            The content on MSS Group BD (https://www.mssgroupbd.com) is published in good faith and for general information and shopping purposes only.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            {disclaimerSections.map((section, index) => (
                                <AccordionItem value={`item-${index}`} key={index}>
                                    <AccordionTrigger className="text-lg hover:no-underline font-semibold">
                                        <div className="flex items-center gap-4">
                                            {section.icon}
                                            <span>{section.title}</span>
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
      </div>
    </div>
  );
}
