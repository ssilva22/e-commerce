// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB3cAKUmCSLKFcvuNgRPEwBKvqvzW1EUog",
    authDomain: "challenge-9205a.firebaseapp.com",
    projectId: "challenge-9205a",
    storageBucket: "challenge-9205a.appspot.com",
    messagingSenderId: "585873705969",
    appId: "1:585873705969:web:1945a0f1d9ba65f8ba9250",
    measurementId: "G-EEHDYXBZ70"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth= firebase.auth();

  export {db,auth};