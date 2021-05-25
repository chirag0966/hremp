import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBex0FQT5CIxFDo5mSNAH_6wHPL8azce8k",
  authDomain: "hremp-51f09.firebaseapp.com",
  projectId: "hremp-51f09",
  storageBucket: "hremp-51f09.appspot.com",
  messagingSenderId: "159128751693",
  appId: "1:159128751693:web:71fa2e02c51ce129151604",
  measurementId: "G-N8Z13GHSSH",
};

let Firebase = null;

if (!firebase.apps.length) {
  Firebase = firebase.initializeApp(firebaseConfig);
} else {
  Firebase = firebase.app();
}

export default Firebase;
