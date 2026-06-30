import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAizcODa-KvYrCtzu04wxd85eGV_WxdNjs",
  authDomain: "studio-5839143063-657df.firebaseapp.com",
  projectId: "studio-5839143063-657df",
  storageBucket: "studio-5839143063-657df.firebasestorage.app",
  messagingSenderId: "1373115587",
  appId: "1:1373115587:web:793a14480e55b3f28cbe76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
