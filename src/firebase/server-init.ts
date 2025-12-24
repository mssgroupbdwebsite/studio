
import { initializeApp, getApps, getApp, App, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { firebaseConfig } from '@/firebase/config';

let app: App;

const serviceAccount = process.env.FIREBASE_SERVICE_ACCOUNT
  ? JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
  : undefined;

// Ensure the app is initialized only once.
if (getApps().length === 0) {
  // When running in a Google Cloud environment like App Hosting,
  // initializeApp() with no arguments automatically uses Application
  // Default Credentials. However, we'll provide explicit config for robustness.
  app = initializeApp({
    projectId: firebaseConfig.projectId,
    // credential: serviceAccount ? cert(serviceAccount) : undefined, // Use default credentials if service account not provided
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
