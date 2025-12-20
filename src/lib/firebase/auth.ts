
'use client';

import {auth} from '@/lib/firebase/config';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut as firebaseSignOut,
} from 'firebase/auth';

const GOOGLE_PROVIDER = new GoogleAuthProvider();

export async function signInWithGoogle() {
  await signInWithRedirect(auth, GOOGLE_PROVIDER);
}

export async function signOut() {
  await firebaseSignOut(auth);
}
