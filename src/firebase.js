// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhpwPZAdYKU0WvtpIgeEQ-shLAxtvNkRo",
  authDomain: "instagram-33108.firebaseapp.com",
  projectId: "instagram-33108",
  storageBucket: "instagram-33108.appspot.com",
  messagingSenderId: "861905790538",
  appId: "1:861905790538:web:5b7824a0f0ab45091928b3",
  measurementId: "G-YBVZCPTVKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth();