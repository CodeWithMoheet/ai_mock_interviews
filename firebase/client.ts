// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKuerx0QXNLMA02pcQlmQWcbRh2upVmPQ",
  authDomain: "interviewprep-f49cc.firebaseapp.com",
  projectId: "interviewprep-f49cc",
  storageBucket: "interviewprep-f49cc.firebasestorage.app",
  messagingSenderId: "756390775811",
  appId: "1:756390775811:web:13f3ccc4e12e9566325236",
  measurementId: "G-YLB7TWFERQ"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
