
'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { PanelLeft, Home, ShoppingBag, Package, Users, BarChart2, Settings, Image as ImageIcon } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { Logo } from '../layout/logo';

const navItems = [
  { href: '/admin/inquiries', label: 'Inquiries', icon: Home },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '/media', label: 'Media Library', icon: ImageIcon },
  { href: '#', label: 'Orders', icon: ShoppingBag, disabled: true },
  { href: '#', label: 'Customers', icon: Users, disabled: true },
  { href: '#', label: 'Analytics', icon: BarChart2, disabled: true },
  { href: '/admin/settings', label: 'Settings', icon: Settings, disabled: false },
];


export function AdminHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 sm:py-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <Logo className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">{siteConfig.name}</span>
            </Link>
            {navItems.map(({href, label, icon: Icon, disabled}) => (
              <Link
                key={label}
                href={href}
                className={`flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground ${
                  disabled ? 'pointer-events-none opacity-50' : ''
                }`}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
}
