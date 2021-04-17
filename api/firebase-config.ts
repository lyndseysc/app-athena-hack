import React from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyAFjzoVvGwZTLF3mpoUuRAq99dzyT3O_fc",
    authDomain: "athena-hack.firebaseapp.com",
    projectId: "athena-hack",
    storageBucket: "athena-hack.appspot.com",
    messagingSenderId: "636279623587",
    appId: "1:636279623587:web:2ad7e204b66820dde1d416",
    measurementId: "G-T8GM6RNBXP"
  };

export const FirebaseContext = React.createContext<firebase.app.App | null>(
  null,
);
export const FirebaseProvider = FirebaseContext.Provider;


try {
  firebase.initializeApp(firebaseConfig);
} catch(err){
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)}
}
export const fire = firebase;
