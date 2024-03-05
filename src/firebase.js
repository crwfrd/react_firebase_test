// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaIMMrA7q6jLxG6z0D6GYARRuP1bcMY5I",
  authDomain: "reactfirebasetest-7dffb.firebaseapp.com",
  projectId: "reactfirebasetest-7dffb",
  storageBucket: "reactfirebasetest-7dffb.appspot.com",
  messagingSenderId: "307587456724",
  appId: "1:307587456724:web:5f5084c2b5de8a85bee541",
  measurementId: "G-ZV9XVV1DLJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);