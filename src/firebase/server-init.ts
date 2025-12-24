
import { initializeApp, getApps, getApp, App, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { firebaseConfig } from '@/firebase/config';

let app: App;

// Safely parse the service account from the environment variable.
const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT;
let serviceAccount;
if (serviceAccountString) {
  try {
    serviceAccount = JSON.parse(serviceAccountString);
  } catch (e) {
    console.error('Error parsing FIREBASE_SERVICE_ACCOUNT JSON:', e);
  }
}

// Ensure the app is initialized only once.
if (getApps().length === 0) {
  app = initializeApp({
    credential: serviceAccount ? cert(serviceAccount) : undefined,
    projectId: firebaseConfig.projectId,
  });
} else {
  app = getApp();
}

const adminAuth = getAuth(app);
const adminDb = getFirestore(app);

/**
 * Returns the singleton instances of the Firebase Admin services.
 */
export function getAdminServices() {
    return { app, auth: adminAuth, firestore: adminDb };
}
