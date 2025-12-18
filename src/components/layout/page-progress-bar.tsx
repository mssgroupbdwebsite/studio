// src/components/layout/page-progress-bar.tsx
'use client';

import { motion, useScroll, useSpring } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export function PageProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 800); // Corresponds to animation duration
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Scroll progress indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      {/* Navigation indicator */}
      <motion.div
        key={pathname}
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 0] }}
        transition={{ duration: 0.8, ease: 'easeInOut', times: [0, 0.5, 1] }}
        style={{
          display: isNavigating ? 'block' : 'none',
        }}
      />
    </>
  );
}
