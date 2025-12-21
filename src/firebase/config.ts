
export const firebaseConfig = {
  apiKey: "AIzaSyA0uKuwTfKVwNnyPyv_ul1fnU9XiqBjBo8",
  authDomain: "studio-2779115415-2fdb9.firebaseapp.com",
  databaseURL: "https://studio-2779115415-2fdb9-default-rtdb.firebaseio.com",
  projectId: "studio-2779115415-2fdb9",
  storageBucket: "studio-2779115415-2fdb9.firebasestorage.app",
  messagingSenderId: "604004472088",
  appId: "1:604004472088:web:23ea2297f305ab31047a6d"
};

// Check if we are in a browser environment and on a development host
if (typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' || window.location.hostname.includes('cloudworkstations.dev'))) {
    // In some development environments, using the window's hostname as the authDomain can resolve configuration errors.
    firebaseConfig.authDomain = window.location.hostname;
}
