
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { Logo } from './logo';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Logo className="h-8 w-8 text-primary" />
              <span className="text-lg font-bold font-headline">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Your trusted partner in apparel sourcing and manufacturing.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2 md:grid-cols-3">
            <div>
              <h3 className="font-semibold font-headline">Navigation</h3>
              <ul className="mt-4 space-y-2">
                {siteConfig.mainNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href!} className="text-sm text-muted-foreground hover:text-primary">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold font-headline">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">Company</Link></li>
                <li><Link href="/quality" className="text-sm text-muted-foreground hover:text-primary">Quality & Compliance</Link></li>
                <li><Link href="/sustainability" className="text-sm text-muted-foreground hover:text-primary">Sustainability</Link></li>
                <li><Link href="/blog" className="text-sm text-muted-foreground hover:text-primary">Blog</Link></li>
                <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
                <li><Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-primary">Disclaimer</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold font-headline">Contact</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                Dhaka, Bangladesh
                <br />
                <a href="mailto:info@mssgroupbd.com" className="hover:text-primary">info@mssgroupbd.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

    