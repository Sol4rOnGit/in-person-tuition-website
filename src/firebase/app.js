// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth/web-extension";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmJt9KdBqVzVnKdEkjah5fkiWkh0-8ZjI",
  authDomain: "stem-tutors.firebaseapp.com",
  projectId: "stem-tutors",
  storageBucket: "stem-tutors.firebasestorage.app",
  messagingSenderId: "683163375680",
  appId: "1:683163375680:web:e0f49c5b85b4efc662e7a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Init auth auth export
const auth = getAuth();
export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut }