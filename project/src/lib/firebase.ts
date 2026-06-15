import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GithubAuthProvider, signInWithPopup, signOut as fbSignOut, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "mock-key",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "mock-domain",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "mock-id",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "mock-bucket",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "mock-sender",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "mock-app-id"
};

// Initialize Firebase only if config is provided or we're using mock (prevents crash, but auth will fail in mock mode if actually called against Firebase)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const githubProvider = new GithubAuthProvider();

export const loginWithGithub = async () => {
  try {
    if (firebaseConfig.apiKey === "mock-key") {
      console.warn("Using mock Firebase credentials. Simulating login locally.");
      // Just mock local login if needed, or throw error depending on environment
      alert("Firebase credentials not configured. Mocking GitHub OAuth locally.");
      return null;
    }
    const result = await signInWithPopup(auth, githubProvider);
    return result.user;
  } catch (error) {
    console.error("Error signing in with GitHub", error);
    throw error;
  }
};

export const logout = async () => {
  if (firebaseConfig.apiKey === "mock-key") return;
  return fbSignOut(auth);
};

export const getCloudProgress = async (uid: string) => {
  if (firebaseConfig.apiKey === "mock-key") return null;
  const docRef = doc(db, "users", uid);
  const snap = await getDoc(docRef);
  if (snap.exists()) {
    return snap.data().progress;
  }
  return null;
};

export { auth, db, onAuthStateChanged, signInWithPopup, githubProvider };
