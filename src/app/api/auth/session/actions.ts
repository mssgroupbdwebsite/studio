
'use server';
import {getAuth} from 'firebase/auth';
import {cookies} from 'next/headers';
import {app} from '@/lib/firebase/server-config'; // Use server config
import {getAuth as getAdminAuth} from 'firebase-admin/auth';

export async function createSession(idToken: string) {
  const expiresIn = 60 * 60 * 24 * 5 * 1000; // 5 days
  try {
    const sessionCookie = await getAdminAuth(app).createSessionCookie(idToken, {expiresIn});
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
    return {success: false, error: 'Failed to create session.'};
  }
}

export async function deleteSession() {
  cookies().delete('session');
}
