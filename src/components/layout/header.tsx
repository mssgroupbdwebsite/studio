import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { MainNav } from '@/components/layout/main-nav';
import { MobileNav } from '@/components/layout/mobile-nav';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '../ui/button';
import { Logo } from './logo';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <Logo className="h-6 w-6" />
            <span className="inline-block font-bold font-headline">{siteConfig.name}</span>
          </Link>
          <MainNav items={siteConfig.mainNav} />
        </div>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
            <MobileNav />
          </nav>
        </div>
      </div>
    </header>
  );
}
