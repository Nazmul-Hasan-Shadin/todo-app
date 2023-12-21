// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz6E2W-U7Y7nhrOU2i2DCaWH1E4QLQ3Qc",
  authDomain: "todo-app-4489c.firebaseapp.com",
  projectId: "todo-app-4489c",
  storageBucket: "todo-app-4489c.appspot.com",
  messagingSenderId: "1087825816098",
  appId: "1:1087825816098:web:489bb5a540d44bc791787b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
const auth = getAuth(app);

export default auth
