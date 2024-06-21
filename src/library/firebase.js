import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-60aac.firebaseapp.com",
  projectId: "reactchat-60aac",
  storageBucket: "reactchat-60aac.appspot.com",
  messagingSenderId: "925933911947",
  appId: "1:925933911947:web:d19559d2b469131183b98e",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
