// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByPMBh5Gj_SfC4GufitD-ksEQTRusMmNk",
  authDomain: "brsfloors-10ed7.firebaseapp.com",
  projectId: "brsfloors-10ed7",
  storageBucket: "brsfloors-10ed7.firebasestorage.app",
  messagingSenderId: "638494768486",
  appId: "1:638494768486:web:9f1ee0fac5d8620a739ca7",
  measurementId: "G-1G59G94VTW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
