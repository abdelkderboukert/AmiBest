import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY || "",
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN || "",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID || "",
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET || "",
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID || "",
  appId: process.env.NEXT_PUBLIC_APP_ID || "",
};

// Validate Firebase configuration
const validateFirebaseConfig = () => {
  const requiredFields = [
    "apiKey",
    "authDomain",
    "projectId",
    "storageBucket",
    "messagingSenderId",
    "appId",
  ];

  const missingFields = requiredFields.filter(
    (field) => !firebaseConfig[field as keyof typeof firebaseConfig]
  );

  if (missingFields.length > 0) {
    console.error("Missing Firebase configuration fields:", missingFields);
    throw new Error(
      `Missing Firebase configuration: ${missingFields.join(", ")}`
    );
  }
};

// Initialize Firebase only if configuration is valid
let app: any = null;
let auth: any = null;
let db: any = null;
let storage: any = null;

try {
  validateFirebaseConfig();
  app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
} catch (error) {
  console.error("Firebase initialization error:", error);
  // Create mock objects to prevent app crashes
  auth = null;
  db = null;
  storage = null;
}

export { app, auth, db, storage, firebaseConfig };
