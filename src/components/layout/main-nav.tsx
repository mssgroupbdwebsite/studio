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
    <nav className="hidden gap-8 md:flex">
      {items?.length ? (
        items.map(
          (item, index) =>
            item.href && (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  'relative flex items-center text-xs font-medium text-foreground/70 transition-transform duration-200 ease-in-out hover:scale-110 hover:text-foreground/90',
                  pathname === item.href && '!text-primary',
                  item.disabled && 'cursor-not-allowed opacity-80'
                )}
              >
                {item.title}
                {pathname === item.href && (
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-primary" />
                )}
              </Link>
            )
        )
      ) : null}
    </nav>
  );
}
