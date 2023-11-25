// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsdBO4ChR9SUFeCZEX21uaneNPWIHKKPo",
  authDomain: "bistroboss-24287.firebaseapp.com",
  projectId: "bistroboss-24287",
  storageBucket: "bistroboss-24287.appspot.com",
  messagingSenderId: "1088964375886",
  appId: "1:1088964375886:web:634ee558140787cdfb5a1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;