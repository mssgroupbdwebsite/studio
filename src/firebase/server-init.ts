
import { initializeApp, getApps, getApp, App } from 'firebase-admin/app';
import { firebaseConfig } from '@/firebase/config';

const appName = 'firebase-admin-app-server-actions';

/**
 * Initializes and returns the Firebase Admin App instance, ensuring it's a singleton.
 */
export async function initializeAdminApp(): Promise<App> {
  if (getApps().some(app => app.name === appName)) {
    return getApp(appName);
  }

  return initializeApp({
      projectId: firebaseConfig.projectId,
    },
    appName
  );
}
