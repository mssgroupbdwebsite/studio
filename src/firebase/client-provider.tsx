
'use client';

import React, { useMemo, type ReactNode } from 'react';
import { FirebaseProvider } from '@/firebase/provider';
import { initializeServices } from '@/firebase'; // Import the new function

interface FirebaseClientProviderProps {
  children: ReactNode;
}

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  // useMemo ensures that Firebase is only initialized once per application lifecycle.
  // This is the core of the fix.
  const services = useMemo(() => {
    try {
      return initializeServices();
    } catch (error) {
      console.error("Failed to initialize Firebase:", error);
      // Failed to initialize Firebase services, render without Firebase
      return { firebaseApp: null, auth: null, firestore: null };
    }
  }, []);

  if (!services.firebaseApp || !services.auth || !services.firestore) {
    // If initialization failed, render children without Firebase context.
    // This allows the app to still function, but Firebase features will be disabled
    // and a useful error will be logged to the console.
    return <>{children}</>;
  }

  return (
    <FirebaseProvider
      firebaseApp={services.firebaseApp}
      auth={services.auth}
      firestore={services.firestore}
    >
      {children}
    </FirebaseProvider>
  );
}
