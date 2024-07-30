// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpfzKTfoDFMatyY9-yLRGwaAqFhZiBNFs",
  authDomain: "soil-master-210f1.firebaseapp.com",
  databaseURL: "https://soil-master-210f1-default-rtdb.firebaseio.com",
  projectId: "soil-master-210f1",
  storageBucket: "soil-master-210f1.appspot.com",
  
  messagingSenderId: "969108560722",
  appId: "1:969108560722:web:5ad16393a68efa73f5b88b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app) //This is a named export, not a default export.

//authentication
export const auth=getAuth() //initialie ...this is name export
