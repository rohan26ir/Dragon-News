// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD75ST2ln8XqEpMHm_9v5nXrf2CfNnK5DU",
  authDomain: "dragon-news-101.firebaseapp.com",
  projectId: "dragon-news-101",
  storageBucket: "dragon-news-101.firebasestorage.app",
  messagingSenderId: "873527759411",
  appId: "1:873527759411:web:1c1f90b46ec37eb081c946"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;