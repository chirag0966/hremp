import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppHeader from "../Components/AppHeader";
import Admin from "../Containers/Admin";
import Login from "../Containers/Login";
import NewUser from "../Containers/NewUser";
import AuthContext from "../Services/Auth/AuthContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <AuthContext.Provider value={{ user, setUser }}>
        <AppHeader />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/admin" component={Admin} />
          <Route path="/newUser" component={NewUser} />
          <Route path="/" component={Admin} />
        </Switch>
      </AuthContext.Provider>
    </Router>
  );
}

export default App;
