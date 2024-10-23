// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMLByi1YmXL_zc6PqdTZvwOMdxBYHIIlE",
  authDomain: "netflix-gpt-ba589.firebaseapp.com",
  projectId: "netflix-gpt-ba589",
  storageBucket: "netflix-gpt-ba589.appspot.com",
  messagingSenderId: "647707833456",
  appId: "1:647707833456:web:178c4d670e07a41ec4f0b5",
  measurementId: "G-KKQTEW7M75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();