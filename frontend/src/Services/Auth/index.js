import Firebase from "../Firebase";

const AUTH_DEFAULT_VALUE = () => ({
  user: null,
  isAdmin: false,
  setUser: (user) => {},
  setIsAdmin: (isAdmin) => {},
});

const login = ({ email, password }) => {
  return Firebase.auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => userCredential.user)
    .catch((error) => console.error(error));
};

const logout = () => {
  return Firebase.auth()
    .signOut()
    .then(() => {})
    .catch((error) => console.error(error));
};

export { login, logout, AUTH_DEFAULT_VALUE };
