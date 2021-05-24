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

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const AUTH_DEFAULT_VALUE = () => ({
  user: null,
  setUser: (user) => {},
});

const login = ({ email, password }) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => userCredential.user)
    .catch((error) => console.error(error));
};

const logout = () => {
  return firebase
    .auth()
    .signOut()
    .then(() => {})
    .catch((error) => console.error(error));
};

export { firebase, login, logout, AUTH_DEFAULT_VALUE };
