import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AUTH_DEFAULT_VALUE } from "../Services/Auth";
import AppHeader from "../Components/AppHeader";
import Admin from "../Containers/Admin";
import Login from "../Containers/Login";
import NewUser from "../Containers/NewUser";
import AuthContext from "../Services/Auth/AuthContext";
import Initial from "../Containers/Initial";
import PrivateRoute from "./PrivateRoute";
import User from "../Containers/User";

function App() {
  const [user, setUser] = useState(AUTH_DEFAULT_VALUE().user);
  const [isAdmin, setIsAdmin] = useState(AUTH_DEFAULT_VALUE().isAdmin);

  return (
    <Router>
      <AuthContext.Provider value={{ user, setUser, isAdmin, setIsAdmin }}>
        <AppHeader />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact={user !== null} path="/" component={Initial} />
          <PrivateRoute path="/admin" component={Admin} />
          <PrivateRoute path="/newUser" component={NewUser} />
          <PrivateRoute path="/user" component={User} />
        </Switch>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
