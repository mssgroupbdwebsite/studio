
import { initializeApp, getApps, getApp, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { firebaseConfig } from '@/firebase/config';

const appName = 'firebase-admin-app-server-actions';

/**
 * Initializes and returns the Firebase Admin App instance, ensuring it's a singleton.
 */
export async function initializeAdminApp() {
  let app: App;
  if (!getApps().some(app => app.name === appName)) {
    app = initializeApp({
        projectId: firebaseConfig.projectId,
      },
      appName
    );
  } else {
    app = getApp(appName);
  }

  const auth = getAuth(app);
  const firestore = getFirestore(app);

  return { app, auth, firestore };
}
