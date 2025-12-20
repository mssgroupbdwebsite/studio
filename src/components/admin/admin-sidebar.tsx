
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, ShoppingBag, BarChart2, Users, Settings, Package } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '../layout/logo';
import { siteConfig } from '@/config/site';

const navItems = [
  { href: '/admin/inquiries', label: 'Inquiries', icon: Home },
  { href: '/admin/products', label: 'Products', icon: Package },
  { href: '#', label: 'Orders', icon: ShoppingBag, disabled: true },
  { href: '#', label: 'Customers', icon: Users, disabled: true },
  { href: '#', label: 'Analytics', icon: BarChart2, disabled: true },
  { href: '#', label: 'Settings', icon: Settings, disabled: true },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 flex-shrink-0 border-r bg-background hidden md:block">
      <div className="flex h-full flex-col">
        <div className="flex h-14 items-center border-b px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Logo className="h-6 w-6" />
            <span>{siteConfig.name}</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="grid items-start px-4 text-sm font-medium">
            {navItems.map(({ href, label, icon: Icon, disabled }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
                    pathname === href && 'bg-muted text-primary',
                    disabled && 'pointer-events-none opacity-50'
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
