// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFjwogjtG74VzhNY3eRhj2i5XP7kjMWs0",
  authDomain: "pokemones-39458.firebaseapp.com",
  projectId: "pokemones-39458",
  storageBucket: "pokemones-39458.appspot.com",
  messagingSenderId: "406440024711",
  appId: "1:406440024711:web:5912a73a568ead8cb7b622"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}

