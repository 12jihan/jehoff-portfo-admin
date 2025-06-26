import {
  type FirebaseApp,
  type FirebaseOptions,
  initializeApp,
} from "firebase/app";
// import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Init Firebase serivces
// export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

export default app;
function getAuth(app: FirebaseApp) {
  throw new Error("Function not implemented.");
}
