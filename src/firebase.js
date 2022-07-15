import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8Pyx7H8GD8hJsFHs6DzpOpNz7guOf-G0",
  authDomain: "linkedin-clone-61d9f.firebaseapp.com",
  projectId: "linkedin-clone-61d9f",
  storageBucket: "linkedin-clone-61d9f.appspot.com",
  messagingSenderId: "810069730892",
  appId: "1:810069730892:web:ad771843a2d070333bf6e9",
  measurementId: "G-F4QTP5KDLF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
