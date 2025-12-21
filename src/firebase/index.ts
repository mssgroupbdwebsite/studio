
'use client';

// Centralize initialization logic, but don't run it automatically.
import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, type FirebaseApp } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

// Define a type for the services for clarity.
export type FirebaseServices = {
  firebaseApp: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
};

function initializeServices(): FirebaseServices {
    const firebaseApp = !getApps().length
        ? initializeApp(firebaseConfig)
        : getApp();
    
    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);

    return { firebaseApp, auth, firestore };
}

// Export the function that initializes and returns the services
export { initializeServices };

// Re-export everything else that components might need
export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
