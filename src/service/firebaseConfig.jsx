// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIXmVFNFbsbmg2zr8L_6PGvv-DH3LrcAo",
  authDomain: "trip-planner-77203.firebaseapp.com",
  projectId: "trip-planner-77203",
  storageBucket: "trip-planner-77203.firebasestorage.app",
  messagingSenderId: "290935109231",
  appId: "1:290935109231:web:8003b03198a1aac30d3f9a",
  measurementId: "G-EFK0KXVN8F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
