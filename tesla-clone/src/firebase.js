// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8XfTQCWLhWYBhnkNg08-50Dq2AaX63uo",
  authDomain: "tesla-clone-e3ed5.firebaseapp.com",
  projectId: "tesla-clone-e3ed5",
  storageBucket: "tesla-clone-e3ed5.appspot.com",
  messagingSenderId: "323053264041",
  appId: "1:323053264041:web:f86fc30a7f2fa72b651db8",
  measurementId: "G-WPXEB5H0R7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
