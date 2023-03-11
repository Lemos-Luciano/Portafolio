import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKZ1dq07AqdIRQrIRZaumlgMKTRh5SN9g",
  authDomain: "react-luchoflix.firebaseapp.com",
  projectId: "react-luchoflix",
  storageBucket: "react-luchoflix.appspot.com",
  messagingSenderId: "1081002744749",
  appId: "1:1081002744749:web:25e1c02f22a1ea46cc5f24",
  measurementId: "G-2S1655QBL4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app); 