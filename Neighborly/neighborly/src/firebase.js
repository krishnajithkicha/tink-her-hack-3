// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCYCYlIoFZpD7sLbqa62aaxp83NuSrYSNE",
  authDomain: "neighborly-ab9c7.firebaseapp.com",
  projectId: "neighborly-ab9c7",
  storageBucket: "neighborly-ab9c7.firebasestorage.app",
  messagingSenderId: "493611316001",
  appId: "1:493611316001:web:dabb95b08e0c5bf2d58460",
  measurementId: "G-TVHJVZ901B"
};

// Initialize Firebase App
initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();





