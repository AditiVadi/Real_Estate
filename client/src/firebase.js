// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d446c.firebaseapp.com",
  projectId: "mern-estate-d446c",
  storageBucket: "mern-estate-d446c.appspot.com",
  messagingSenderId: "782308881092",
  appId: "1:782308881092:web:2302d99876d40e28c08f91"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);