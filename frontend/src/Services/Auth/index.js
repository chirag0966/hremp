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

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const AUTH_DEFAULT_VALUE = {
  user: auth.currentUser,
  setUser: (user) => {},
};

const login = ({ email, password }) => {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => userCredential.user)
    .catch((error) => console.error(error));
};

const logout = () => {
  return auth
    .signOut()
    .then(() => {})
    .catch((error) => console.error(error));
};

const getIdToken = () => {
  return auth.currentUser?.getIdToken();
};

export { login, logout, getIdToken, AUTH_DEFAULT_VALUE };
