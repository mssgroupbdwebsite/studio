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
      {items?.length ? (
        items.map(
          (item, index) =>
            item.href && (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  'flex items-center text-sm font-medium text-muted-foreground hover:text-foreground',
                  pathname === item.href && 'text-foreground',
                  item.disabled && 'cursor-not-allowed opacity-80'
                )}
              >
                {item.title}
              </Link>
            )
        )
      ) : null}
    </nav>
  );
}
