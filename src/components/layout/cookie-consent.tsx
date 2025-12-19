'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // We can't check localStorage on the server, so we do it in useEffect.
    const consent = localStorage.getItem('cookie_consent_accepted');
    if (consent !== 'true') {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    localStorage.setItem('cookie_consent_accepted', 'true');
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-4xl mx-auto rounded-lg border bg-background/80 p-4 shadow-2xl backdrop-blur-lg">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <Cookie className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-sm text-muted-foreground">
                  We use cookies to improve site performance and user experience. By continuing, you agree to our use of cookies.
                </p>
              </div>
              <div className="flex-shrink-0 flex items-center gap-2">
                <Button size="sm" onClick={handleAccept}>
                  Accept
                </Button>
                <Button size="sm" variant="link" asChild>
                  <Link href="/privacy-policy">Learn more</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
