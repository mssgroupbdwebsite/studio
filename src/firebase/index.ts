
'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

// --- Centralized Firebase Initialization ---

let firebaseApp: FirebaseApp;
let auth: Auth;
let firestore: Firestore;

// Check if Firebase has already been initialized
if (!getApps().length) {
  // If not initialized, initialize it
  firebaseApp = initializeApp(firebaseConfig);
} else {
  // If already initialized, get the existing app
  firebaseApp = getApp();
}

// Get the Auth and Firestore services
auth = getAuth(firebaseApp);
firestore = getFirestore(firebaseApp);

// Export the initialized services for use in other parts of the app
export { firebaseApp, auth, firestore };

// --- Exports for Providers and Hooks ---

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
