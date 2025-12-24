
'use client';

import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageProgressBar } from '@/components/layout/page-progress-bar';
import { CookieConsent } from '@/components/layout/cookie-consent';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { usePathname } from 'next/navigation';

export function AppLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');

  return (
    <div className={cn('min-h-screen bg-background font-body antialiased')}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <FirebaseClientProvider>
          <PageProgressBar />
          <div className="relative flex min-h-screen flex-col">
            {!isAdminPage && <Header />}
            <main className="flex-1">{children}</main>
            {!isAdminPage && <Footer />}
          </div>
          <Toaster />
          {!isAdminPage && <CookieConsent />}
        </FirebaseClientProvider>
      </ThemeProvider>
    </div>
  );
}
