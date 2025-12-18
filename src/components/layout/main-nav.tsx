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
                  'relative flex items-center text-xs font-medium text-foreground/70 transition-colors duration-200 ease-in-out hover:text-primary',
                  'after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-in-out after:origin-center hover:after:scale-x-100',
                  pathname === item.href && 'text-primary after:scale-x-100',
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
