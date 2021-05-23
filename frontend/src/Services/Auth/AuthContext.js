import { createContext } from "react";

const AUTH_DEFAULT_VALUE = {
  user: null,
  setUser: (user) => {},
};

const AuthContext = createContext(AUTH_DEFAULT_VALUE);

export default AuthContext;
