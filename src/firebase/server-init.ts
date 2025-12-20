
import { initializeApp, getApps, getApp, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

const appName = 'firebase-admin-app-singleton';

let app: App;

// Ensure the app is initialized only once.
if (!getApps().some(app => app.name === appName)) {
  // When running in a Google Cloud environment like App Hosting,
  // initializeApp() with no arguments automatically uses Application
  // Default Credentials.
  app = initializeApp({}, appName);
} else {
  app = getApp(appName);
}

const adminAuth = getAuth(app);
const adminDb = getFirestore(app);

/**
 * Returns the singleton instances of the Firebase Admin services.
 */
export function getAdminServices() {
    return { app, auth: adminAuth, firestore: adminDb };
}
