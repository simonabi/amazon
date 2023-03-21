// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCrquSTB8l18BqFZ5baL-qtZwPEZAH-hjs",
    authDomain: "fir-2cb9c.firebaseapp.com",
    projectId: "fir-2cb9c",
    storageBucket: "fir-2cb9c.appspot.com",
    messagingSenderId: "540787407756",
    appId: "1:540787407756:web:cd26b430d96a1102f634a9",
    measurementId: "G-6W2HTTLCL9"
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore()
export {db, auth };
