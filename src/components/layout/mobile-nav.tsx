'use client';

import * as React from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { siteConfig } from '@/config/site';
import type { NavItem } from '@/types';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <Logo className="mr-2 h-4 w-4" />
            <span className="font-bold font-headline">{siteConfig.name}</span>
          </Link>
          <div className="flex flex-col space-y-3 pt-6">
            {siteConfig.mainNav.map((item) => (
              <MobileLink
                key={item.href}
                href={item.href!}
                onOpenChange={setOpen}
              >
                {item.title}
              </MobileLink>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

interface MobileLinkProps extends React.PropsWithChildren {
  href: string;
  disabled?: boolean;
  onOpenChange?: (open: boolean) => void;
}

function MobileLink({
  children,
  href,
  disabled,
  onOpenChange,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className="text-muted-foreground transition-colors hover:text-foreground"
      onClick={() => {
        onOpenChange?.(false);
      }}
    >
      {children}
    </Link>
  );
}
