// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGlPtQGJdPWveUtE1ecWsnJ7tuxHKGfxI",
  authDomain: "ifpia-3502b.firebaseapp.com",
  projectId: "ifpia-3502b",
  storageBucket: "ifpia-3502b.appspot.com",
  messagingSenderId: "1057812443420",
  appId: "1:1057812443420:web:1e61042db60841cdee0ad9"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()
