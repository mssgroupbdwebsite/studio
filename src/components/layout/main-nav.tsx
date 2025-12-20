
'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NavItem } from '@/types';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2">
      {items?.length
        ? items.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    'relative flex items-center rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors duration-200 ease-in-out hover:text-primary',
                    pathname === item.href && 'text-primary',
                    item.disabled && 'cursor-not-allowed opacity-80'
                  )}
                >
                  {item.title}
                  {pathname === item.href && (
                    <motion.span
                      layoutId="underline"
                      className="absolute bottom-1 left-0 right-0 h-0.5 rounded-full bg-primary"
                    />
                  )}
                </Link>
              )
          )
        : null}
    </nav>
  );
}
