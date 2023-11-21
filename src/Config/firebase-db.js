import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeSVUnxTQx7TyTX8kguYgWcuoizJ0fNEY",
  authDomain: "metart.firebaseapp.com",
  projectId: "metart",
  storageBucket: "metart.appspot.com",
  messagingSenderId: "231852583632",
  appId: "1:231852583632:web:784625fad6516a8e120cd5",
  measurementId: "G-2PJEX0QNP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);