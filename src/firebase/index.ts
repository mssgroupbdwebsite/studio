'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, signInWithRedirect, GoogleAuthProvider, signOut as firebaseSignOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

let firebaseApp: FirebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
}

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export function initializeFirebase() {
  return { firebaseApp, auth, firestore };
}

export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';

// Auth related client actions
const GOOGLE_PROVIDER = new GoogleAuthProvider();

export async function signInWithGoogle() {
  const { auth } = initializeFirebase();
  await signInWithRedirect(auth, GOOGLE_PROVIDER);
}

export async function signOut() {
  const { auth } = initializeFirebase();
  await firebaseSignOut(auth);
}
