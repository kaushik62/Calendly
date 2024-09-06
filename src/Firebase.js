import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDRpiHZP5_NDvyOovecNI9zh2Ljhpj6_24",
  authDomain: "mentog-a087a.firebaseapp.com",
  projectId: "mentog-a087a",
  storageBucket: "mentog-a087a.appspot.com",
  messagingSenderId: "477551855717",
  appId: "1:477551855717:web:de4855f29323a84cbf1e8c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
const auth = getAuth(app);

// Initialize Cloud Firestore
const db = getFirestore(app);

// Google Auth Provider
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, db, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, doc, setDoc };
