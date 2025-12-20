
'use client';

import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword as firebaseSignIn, createUserWithEmailAndPassword as firebaseSignUp, signOut as firebaseSignOut } from 'firebase/auth';
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
export * from './errors';
export * from './error-emitter';

// Auth related client actions
export async function signInWithEmailAndPassword(email: string, password: string) {
  const { auth } = initializeFirebase();
  return firebaseSignIn(auth, email, password);
}

export async function createUserWithEmailAndPassword(email: string, password: string) {
  const { auth } = initializeFirebase();
  return firebaseSignUp(auth, email, password);
}

export async function signOut() {
  const { auth } = initializeFirebase();
  await firebaseSignOut(auth);
}
