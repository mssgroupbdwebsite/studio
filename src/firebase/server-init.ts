
import { initializeApp, getApps, getApp, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

let app: App;

// Ensure the app is initialized only once.
if (getApps().length === 0) {
  // When running in a Google Cloud environment like App Hosting,
  // initializeApp() with no arguments automatically uses Application
  // Default Credentials.
  app = initializeApp();
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
