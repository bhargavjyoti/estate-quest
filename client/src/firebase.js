// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-quest.firebaseapp.com",
  projectId: "estate-quest",
  storageBucket: "estate-quest.appspot.com",
  messagingSenderId: "303972730394",
  appId: "1:303972730394:web:7620752bcf2d0f764033a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);