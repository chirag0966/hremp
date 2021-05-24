import { createContext } from "react";
import { AUTH_DEFAULT_VALUE } from "./index";

const AuthContext = createContext(AUTH_DEFAULT_VALUE());

export default AuthContext;
