
'use client';

// Centralize initialization logic.
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

// Initialize Firebase app if it hasn't been already.
const firebaseApp = !getApps().length
    ? initializeApp(firebaseConfig)
    : getApp();

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

// Export the initialized services directly.
export { firebaseApp, auth, firestore };

// Re-export everything else that components might need.
export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './errors';
export * from './error-emitter';
