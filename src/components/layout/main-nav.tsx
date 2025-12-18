'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavItem } from '@/types';
import { cn } from '@/lib/utils';

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden gap-6 md:flex">
      {items?.length
        ? items.map(
            (item, index) =>
              item.href && (
                <div key={index} className="relative">
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center rounded-md px-3 py-2 text-xs font-medium text-foreground/70 transition-colors duration-200 ease-in-out hover:bg-primary/10 hover:text-primary',
                      pathname === item.href && 'text-primary',
                      item.disabled && 'cursor-not-allowed opacity-80'
                    )}
                  >
                    {item.title}
                  </Link>
                  {pathname === item.href && (
                    <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary"></span>
                  )}
                </div>
              )
          )
        : null}
    </nav>
  );
}
