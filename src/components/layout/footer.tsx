
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Logo } from './logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, Linkedin, Facebook, Instagram, Heart } from 'lucide-react';
import { Badge } from '../ui/badge';

const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-16 md:py-24">
        {/* Newsletter Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center bg-muted p-8 rounded-2xl">
          <div>
             <h3 className="text-2xl md:text-3xl font-bold font-headline text-foreground">Stay Connected</h3>
             <p className="mt-2 text-muted-foreground">Get the latest industry insights, product updates, and company news delivered right to your inbox.</p>
          </div>
          <form className="flex w-full max-w-md items-center space-x-2">
            <Input type="email" placeholder="Enter your email" className="h-12 flex-1" />
            <Button type="submit" size="lg" className="h-12">
              Subscribe <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {/* Branding Column */}
            <div className="col-span-2 lg:col-span-1">
                <Link href="/" className="flex items-center space-x-2">
                    <Logo className="h-8 w-8 text-primary" />
                    <span className="text-lg font-bold font-headline">{siteConfig.name}</span>
                </Link>
                <p className="mt-4 text-sm text-muted-foreground">
                    Your trusted, full-service apparel sourcing and manufacturing partner in Bangladesh. We deliver high-quality products with a commitment to ethical practices and sustainability.
                </p>
                <div className="mt-6 flex space-x-4">
                    {socialLinks.map(social => (
                        <Link key={social.name} href={social.href} className="text-muted-foreground hover:text-primary transition-colors">
                            <social.icon className="h-5 w-5" />
                            <span className="sr-only">{social.name}</span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Link Columns */}
            <div className="text-sm">
                <h3 className="font-semibold font-headline">Navigation</h3>
                <ul className="mt-4 space-y-3">
                    {siteConfig.mainNav.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href!} className="text-muted-foreground hover:text-primary transition-colors">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                </ul>
            </div>

            <div className="text-sm">
                <h3 className="font-semibold font-headline">Company</h3>
                <ul className="mt-4 space-y-3">
                    <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                    <li><Link href="/quality" className="text-muted-foreground hover:text-primary transition-colors">Quality & Compliance</Link></li>
                    <li><Link href="/sustainability" className="text-muted-foreground hover:text-primary transition-colors">Sustainability</Link></li>
                    <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
                </ul>
            </div>

            <div className="text-sm">
                <h3 className="font-semibold font-headline">Legal</h3>
                <ul className="mt-4 space-y-3">
                    <li><Link href="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                    <li><Link href="/disclaimer" className="text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link></li>
                    <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
                </ul>
            </div>
             <div className="text-sm">
              <h3 className="font-semibold font-headline">Contact</h3>
              <ul className="mt-4 space-y-3">
                <li className="text-muted-foreground">House # 04(4th Floor), Road # 04 Sector # 01, Uttara, Dhaka-1230.</li>
                <li className="text-muted-foreground hover:text-primary transition-colors"><a href="mailto:info@mssgroupbd.com">info@mssgroupbd.com</a></li>
              </ul>
            </div>
        </div>
      </div>
      
       {/* Sub-footer */}
      <div className="border-t bg-muted/50">
        <div className="container flex items-center justify-center py-4 text-sm text-muted-foreground relative">
            <p className="text-center">&copy; 2025 {siteConfig.name}. All Rights Reserved.</p>
            <div className="absolute right-6 sm:right-8">
                 <a 
                    href="https://www.facebook.com/mohibbulorjon" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-xs text-muted-foreground/80 hover:text-primary transition-colors duration-300"
                >
                    Developed by ORJON
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
}
