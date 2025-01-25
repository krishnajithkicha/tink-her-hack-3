// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYCYlIoFZpD7sLbqa62aaxp83NuSrYSNE",
  authDomain: "neighborly-ab9c7.firebaseapp.com",
  projectId: "neighborly-ab9c7",
  storageBucket: "neighborly-ab9c7.firebasestorage.app",
  messagingSenderId: "493611316001",
  appId: "1:493611316001:web:dabb95b08e0c5bf2d58460",
  measurementId: "G-TVHJVZ901B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);