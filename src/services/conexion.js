// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqElCHNcUUjnfCqx7eVI2VF4IoQhzh8nM",
  authDomain: "ejanime-store.firebaseapp.com",
  projectId: "ejanime-store",
  storageBucket: "ejanime-store.appspot.com",
  messagingSenderId: "261093754994",
  appId: "1:261093754994:web:e49a0ec6dd56c5246e1aeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app)