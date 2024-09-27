// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALJNsxoR0vE0zt3cBrKknzL4C0l1d39zE",
  authDomain: "fir-blog-23eb1.firebaseapp.com",
  projectId: "fir-blog-23eb1",
  storageBucket: "fir-blog-23eb1.appspot.com",
  messagingSenderId: "375086635511",
  appId: "1:375086635511:web:4489264ed5d7ec978b76f2",
  measurementId: "G-G7KBYHVTN0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const storage = getStorage()
export const db = getFirestore(app)