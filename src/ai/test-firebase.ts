
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0uKuwTfKVwNnyPyv_ul1fnU9XiqBjBo8",
  authDomain: "studio-2779115415-2fdb9.firebaseapp.com",
  databaseURL: "https://studio-2779115415-2fdb9-default-rtdb.firebaseio.com",
  projectId: "studio-2779115415-2fdb9",
  storageBucket: "studio-2779115415-2fdb9.firebasestorage.app",
  messagingSenderId: "604004472088",
  appId: "1:604004472088:web:23ea2297f305ab31047a6d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

console.log("Starting Firebase Auth test...");

signInWithEmailAndPassword(auth, "test@example.com", "password123")
  .then((userCredential) => {
    console.log("Sign-in successful:", userCredential.user.email);
  })
  .catch((error) => {
    console.error("Sign-in failed with detailed error:");
    console.error("Code:", error.code);
    console.error("Message:", error.message);
    if (error.customData) {
        console.error("Custom Data:", JSON.stringify(error.customData, null, 2));
    }
  });
