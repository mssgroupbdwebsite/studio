'use client';

import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet';
import {Button} from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {PanelLeft, Home, ShoppingBag, Package, Users, BarChart2, Settings} from 'lucide-react';
import {Avatar, AvatarFallback} from '@/components/ui/avatar';
import {siteConfig} from '@/config/site';
import {Logo} from '../layout/logo';
import { useUser, signOut, useAuth } from '@/firebase';
import {deleteSession} from '@/app/api/auth/session/actions';
import {Skeleton} from '../ui/skeleton';

const navItems = [
  {href: '/admin/inquiries', label: 'Inquiries', icon: Home},
  {href: '/admin/products', label: 'Products', icon: Package},
  {href: '#', label: 'Orders', icon: ShoppingBag, disabled: true},
  {href: '#', label: 'Customers', icon: Users, disabled: true},
  {href: '#', label: 'Analytics', icon: BarChart2, disabled: true},
  {href: '/admin/settings', label: 'Settings', icon: Settings},
];

function UserNav() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const auth = useAuth();

  const handleSignOut = async () => {
    if (auth) {
      await signOut(auth);
      await deleteSession();
      router.push('/login');
    }
  };

  const getInitials = (name?: string | null) => {
    if (!name) return 'U';
    const names = name.split(' ');
    if (names.length > 1) {
      return `${names[0][0]}${names[names.length - 1][0]}`;
    }
    return names[0].substring(0, 2);
  };
  
  if (isUserLoading) {
      return <Skeleton className="h-8 w-8 rounded-full" />;
  }

  if (!user) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarFallback>{getInitials(user.displayName || user.email)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.displayName || 'User'}</p>
            <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleSignOut}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

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

      <div className="relative ml-auto flex-1 md:grow-0">
        {/* Can add a search bar here later */}
      </div>

      <UserNav />
    </header>
  );
}
