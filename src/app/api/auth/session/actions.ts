
'use server';
import {cookies} from 'next/headers';
import {app} from '@/lib/firebase/server-config'; // Use single server config
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
    // Log the detailed error to the console for debugging
    console.error('Error creating session cookie:', error);
    // Return a more specific error message
    return {success: false, error: (error as Error).message || 'Failed to create session.'};
  }
}

export async function deleteSession() {
  cookies().delete('session');
}
