
'use client';

import React, { type ReactNode } from 'react';
import { FirebaseProvider } from '@/firebase/provider';
// Import the already-initialized services from the central init file.
import { firebaseApp, auth, firestore } from '@/firebase/client-init';

interface FirebaseClientProviderProps {
  children: ReactNode;
}

/**
 * This component acts as the root provider for Firebase services on the client side.
 * It takes the initialized services from `client-init.ts` and passes them
 * to the `FirebaseProvider`, which then makes them available via React Context.
 */
export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  // Pass the imported, initialized services directly to the context provider.
  return (
    <FirebaseProvider
      firebaseApp={firebaseApp}
      auth={auth}
      firestore={firestore}
    >
      {children}
    </FirebaseProvider>
  );
}
