// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjEkL0jSKSpBMWwMskdyHnabMAyQcG2xw",
  authDomain: "brsfloor-database.firebaseapp.com",
  projectId: "brsfloor-database",
  storageBucket: "brsfloor-database.firebasestorage.app",
  messagingSenderId: "577185033367",
  appId: "1:577185033367:web:e8729787d051ce85880dd2",
  measurementId: "G-T89B5971CY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
