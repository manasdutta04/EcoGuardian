// Firebase configuration for EcoGuardian
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// In development we'll use direct values, in production use environment variables
const firebaseConfig = {
  apiKey: "AIzaSyDGECOx6DVBTYjgqsxSIVGTy6zOLNtZGYE",
  authDomain: "ecoguardian-thrive.firebaseapp.com",
  projectId: "ecoguardian-thrive",
  storageBucket: "ecoguardian-thrive.firebasestorage.app",
  messagingSenderId: "750967275812",
  appId: "1:750967275812:web:6ace9c86df464d26c9b3b1"
};

// For production, use environment variables
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app; 