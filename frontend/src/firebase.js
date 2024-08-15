// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-app-28a1a.firebaseapp.com",
  projectId: "real-estate-app-28a1a",
  storageBucket: "real-estate-app-28a1a.appspot.com",
  messagingSenderId: "32983038170",
  appId: "1:32983038170:web:abd167556533912a028de3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);