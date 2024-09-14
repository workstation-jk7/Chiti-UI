// src/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD8wz3RDPOwX_kQvvqEQhBNi5QhUM54sag",
    authDomain: "chiti-app.firebaseapp.com",
    projectId: "chiti-app",
    storageBucket: "chiti-app.appspot.com",
    messagingSenderId: "267761136773",
    appId: "1:267761136773:web:672c5e5e399806f87f25ec",
    measurementId: "G-FH3QJLWKRH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
