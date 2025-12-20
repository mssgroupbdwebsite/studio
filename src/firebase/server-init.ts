
import { initializeApp, getApps, getApp, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';

const appName = 'firebase-admin-app-server-actions';

/**
 * Initializes and returns the Firebase Admin App instance, ensuring it's a singleton.
 * It uses Application Default Credentials provided by the App Hosting environment.
 */
export async function initializeAdminApp() {
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

  const auth = getAuth(app);
  const firestore = getFirestore(app);

  return { app, auth, firestore };
}
