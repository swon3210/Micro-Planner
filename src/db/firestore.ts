import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyAhzZ4fPeyPZgkbmFJctQGDl9oqMzA23l8",
  authDomain: "micro-15020.firebaseapp.com",
  databaseURL: "https://micro-15020.firebaseio.com",
  projectId: "micro-15020",
  storageBucket: "micro-15020.appspot.com",
  messagingSenderId: "838251692225",
  appId: "1:838251692225:web:7046df697c9687f5fc9440",
  measurementId: "G-BWMNWM6Y0Y"
};
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export const auth = firebase.auth();
