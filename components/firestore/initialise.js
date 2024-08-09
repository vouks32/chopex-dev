// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD572l8o8WCEU3wg24pixdgN3dvVPzW9Fg",
    authDomain: "foodex-db02c.firebaseapp.com",
    projectId: "foodex-db02c",
    storageBucket: "foodex-db02c.appspot.com",
    messagingSenderId: "832358483877",
    appId: "1:832358483877:web:5fca9861deedae5d144a4c",
    measurementId: "G-S8XJTLXGY4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db