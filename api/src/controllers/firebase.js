// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9RW_z6NrLRpFAPPKS_qGRpAPXtbbGy4k",
  authDomain: "api-rest-node-25023.firebaseapp.com",
  projectId: "api-rest-node-25023",
  storageBucket: "api-rest-node-25023.firebasestorage.app",
  messagingSenderId: "528425308921",
  appId: "1:528425308921:web:49ef3602e4319a7b068828"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize Firestore
const db = getFirestore(app);

export { db };