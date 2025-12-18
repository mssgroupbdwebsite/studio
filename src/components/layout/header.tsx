'use client';

import * as React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { MainNav } from '@/components/layout/main-nav';
import { MobileNav } from '@/components/layout/mobile-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '../ui/button';
import { Logo } from './logo';
import { cn } from '@/lib/utils';

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-40 w-full transition-all duration-300",
      scrolled ? "border-b border-white/20 bg-background/80 backdrop-blur-lg" : "bg-transparent"
    )}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-8 w-8" />
            <span className="hidden font-bold sm:inline-block font-headline text-lg">
              {siteConfig.name}
            </span>
          </Link>
        </div>

        <div className="hidden md:flex">
          <MainNav items={siteConfig.mainNav} />
        </div>


        <div className="flex items-center justify-end space-x-2">
          <nav className="hidden md:flex items-center space-x-2">
             <Button asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </nav>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
