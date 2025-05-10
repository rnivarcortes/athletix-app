// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth"; // For authentication
import { getFirestore } from "firebase/firestore"; // For Firestore (if needed)

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArNgq4NTe6DKTsDcpAc9dS_CSTYoqMc7g",
  authDomain: "athletixapp.firebaseapp.com",
  projectId: "athletixapp",
  storageBucket: "athletixapp.firebasestorage.app",
  messagingSenderId: "897444794898",
  appId: "1:897444794898:web:bbcb54fd9a2c8e245b3ecb",
  measurementId: "G-X708D76CPZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services for use in your app
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export { analytics, app };
