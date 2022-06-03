// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdQyhxVigWRxIqDnsCaEfgbCvipz5GbF4",
  authDomain: "pokemones-ba708.firebaseapp.com",
  projectId: "pokemones-ba708",
  storageBucket: "pokemones-ba708.appspot.com",
  messagingSenderId: "206833906508",
  appId: "1:206833906508:web:7adcb1db4ea08098b995e9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}