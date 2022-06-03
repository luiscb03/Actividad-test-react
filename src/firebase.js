// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2S_5LO1LdEalgIz9zR7_iSTHjWParmcQ",
  authDomain: "pokemones-5ef05.firebaseapp.com",
  projectId: "pokemones-5ef05",
  storageBucket: "pokemones-5ef05.appspot.com",
  messagingSenderId: "670266157237",
  appId: "1:670266157237:web:16f95af30dd8c5a058f6fc"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}

