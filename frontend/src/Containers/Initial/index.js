import React, { useContext, useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router";

import { firebase } from "../../Services/Auth";
import axiosClient from "../../Services/Network";
import AuthContext from "../../Services/Auth/AuthContext";
import useStyles from "./styles";

const Initial = () => {
  const history = useHistory();
  const [initialising, setInitialising] = useState(true);
  const { setUser } = useContext(AuthContext);
  const classes = useStyles();

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged((user) => {
      if (user) {
        user.getIdToken().then((idToken) => {
          axiosClient.defaults.headers.common["idToken"] = idToken;
          setUser(user);
          setInitialising(false);
          if (user.claims?.admin) {
            history.push("/admin");
          } else {
            history.push("/user");
          }
        });
      } else {
        setUser(null);
        setInitialising(false);
        history.push("/login");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [history, setUser]);

  return (
    <div className={classes.container}>
      {initialising && <CircularProgress />}
    </div>
  );
};

export default Initial;
