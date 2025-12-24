
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {/* Branding Section */}
          <div className="md:col-span-4 lg:col-span-5">
            <div className="flex flex-col items-start gap-4">
              <Link href="/" className="flex items-center space-x-2">
                <Logo className="h-8 w-8 text-primary" />
                <span className="text-lg font-bold font-headline">{siteConfig.name}</span>
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                Your trusted, full-service apparel sourcing and manufacturing partner in Bangladesh. We deliver high-quality knitwear, woven garments, denim, and sweaters with a commitment to ethical practices and sustainability.
              </p>
            </div>
          </div>
          
          {/* Links Section */}
          <div className="md:col-span-8 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold font-headline">Navigation</h3>
              <ul className="mt-4 space-y-2">
                {siteConfig.mainNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href!} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold font-headline">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/quality" className="text-sm text-muted-foreground hover:text-primary transition-colors">Quality & Compliance</Link></li>
                <li><Link href="/sustainability" className="text-sm text-muted-foreground hover:text-primary transition-colors">Sustainability</Link></li>
                <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold font-headline">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-primary transition-colors">Disclaimer</Link></li>
                 <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Sub-footer */}
        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
