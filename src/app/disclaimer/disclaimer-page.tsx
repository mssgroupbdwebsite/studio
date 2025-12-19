
'use client';

import { useState, useEffect } from 'react';
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
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';

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


export default function DisclaimerPageComponent() {
  const [date, setDate] = useState('');

  useEffect(() => {
    setDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="bg-background min-h-screen">
       <motion.header variants={fadeUp} className="bg-secondary/50 border-b">
        <div className="container mx-auto px-4 md:px-6 py-16 text-center">
             <span className="text-primary font-semibold uppercase tracking-wider font-headline">Disclaimer</span>
            <h1 className="mt-2 text-4xl md:text-5xl font-bold font-headline text-foreground tracking-tight">
                Terms of Use
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Last Updated: {date}
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
                                        <ShieldAlert className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
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
                              If you have any questions about this disclaimer, please contact us.
                          </p>
                          <Button asChild className="w-full">
                              <Link href="mailto:info@mssgroupbd.com">
                                  Email: info@mssgroupbd.com
                              </Link>
                          </Button>
                      </CardContent>
                  </Card>
                </motion.div>
            </motion.div>

            {/* Main Content */}
            <motion.div variants={fadeUp} className="lg:col-span-2">
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className='font-headline text-2xl'>
                            General Information & Terms of Use
                        </CardTitle>
                        <p className="text-sm text-muted-foreground pt-2">
                            The content on MSS Group BD (https://www.mssgroupbd.com) is published in good faith and for general information and shopping purposes only.
                        </p>
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
            </motion.div>

        </div>
      </motion.div>
    </motion.div>
  );
}
