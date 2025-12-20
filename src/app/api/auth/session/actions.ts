
'use server';
import {cookies} from 'next/headers';
import { getAdminServices } from '@/firebase/server-init';

export async function createSession(idToken: string) {
  const { auth } = getAdminServices();
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
  try {
    const sessionCookie = await auth.createSessionCookie(idToken, {expiresIn});
    const options = {
      name: 'session',
      value: sessionCookie,
      maxAge: expiresIn,
      httpOnly: true,
      secure: true,
    };
    cookies().set(options);
    return {success: true};
  } catch (error) {
    console.error('Error creating session cookie:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to create session.';
    return {success: false, error: errorMessage};
  }
}

export async function deleteSession() {
  cookies().delete('session');
}

export async function createAccount(email: string, password: string):Promise<{success: boolean, error?: string, userId?: string}> {
  const { auth, firestore } = getAdminServices();
  try {
    const usersCollection = firestore.collection('users');
    const existingUsers = await usersCollection.limit(1).get();
    const isFirstUser = existingUsers.empty;
    const role = isFirstUser ? 'admin' : 'user';

    const userRecord = await auth.createUser({
      email,
      password
    });

    await firestore.collection('users').doc(userRecord.uid).set({
      uid: userRecord.uid,
      email,
      role
    });

    return { success: true, userId: userRecord.uid };
  } catch (error) {
    console.error('Error creating account:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to create account.';
    return { success: false, error: errorMessage };
  }
}
