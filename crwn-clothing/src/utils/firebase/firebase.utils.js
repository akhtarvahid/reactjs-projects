import { initializeApp } from "firebase/app";

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiAYZQgV9Dg6vXPhHOyOUFHQGuYz0aRj4",
  authDomain: "crown-clothing-db-106f3.firebaseapp.com",
  projectId: "crown-clothing-db-106f3",
  storageBucket: "crown-clothing-db-106f3.appspot.com",
  messagingSenderId: "534852437840",
  appId: "1:534852437840:web:52e7b7fc9c2ae30dc6ce55"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
