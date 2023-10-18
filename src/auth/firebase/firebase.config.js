// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnz3JWY7-BBnapun-f9f7SU4Ze7Q1DHXM",
  authDomain: "midnight-tales-32469.firebaseapp.com",
  projectId: "midnight-tales-32469",
  storageBucket: "midnight-tales-32469.appspot.com",
  messagingSenderId: "542552828150",
  appId: "1:542552828150:web:4a9443a076314c025124d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;