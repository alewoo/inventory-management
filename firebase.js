// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDusv5hhnVBq5Us8xkkclLrGl8unyQ47Ac",
  authDomain: "inventory-management-3c0e9.firebaseapp.com",
  projectId: "inventory-management-3c0e9",
  storageBucket: "inventory-management-3c0e9.appspot.com",
  messagingSenderId: "800887907260",
  appId: "1:800887907260:web:d4f8600b3443a9a0c541b9",
  measurementId: "G-W3X4CFPT23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { firestore };
