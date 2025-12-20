
'use server';

import {auth} from '@/lib/firebase/config';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut as firebaseSignOut,
} from 'firebase/auth';
import {cookies} from 'next/headers';

const GOOGLE_PROVIDER = new GoogleAuthProvider();

export async function signInWithGoogle() {
  await signInWithRedirect(auth, GOOGLE_PROVIDER);
}

export async function createSession() {
  const user = auth.currentUser;
  if (user) {
    const idToken = await user.getIdToken();
    cookies().set('session', idToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24, // 24 hours
    });
    return {success: true};
  }
  return {success: false};
}

export async function signOut() {
  cookies().delete('session');
  await firebaseSignOut(auth);
}
