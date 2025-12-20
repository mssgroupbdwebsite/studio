
'use server';
import {cookies} from 'next/headers';
import { getApps, initializeApp, getApp, App } from 'firebase-admin/app';
import {getAuth as getAdminAuth} from 'firebase-admin/auth';
import { firebaseConfig } from '@/firebase/config';

// This file is the single source of truth for the server-side Firebase Admin App.
// It ensures that the app is initialized only once.
const appName = 'firebase-admin-app-session-actions';
let app: App;
if (!getApps().find(a => a.name === appName)) {
  app = initializeApp({
    projectId: firebaseConfig.projectId,
  }, appName);
} else {
  app = getApp(appName);
}


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
    const errorMessage = error instanceof Error ? error.message : 'Failed to create session.';
    return {success: false, error: errorMessage};
  }
}

export async function deleteSession() {
  cookies().delete('session');
}
