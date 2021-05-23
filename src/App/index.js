import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AppHeader from "../Components/AppHeader";
import Admin from "../Containers/Admin";
import NewUser from "../Containers/NewUser";

function App() {
  return (
    <Router>
      <AppHeader />
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/newUser" component={NewUser} />
        <Route path="/" component={Admin} />
      </Switch>
    </Router>
  );
}

export default App;
