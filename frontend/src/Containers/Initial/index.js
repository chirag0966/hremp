import React, { useContext, useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router";
import jwt_decode from "jwt-decode";

import Firebase from "../../Services/Firebase";
import AuthContext from "../../Services/Auth/AuthContext";
import useStyles from "./styles";

const Initial = () => {
  const history = useHistory();
  const [initialising, setInitialising] = useState(true);
  const { setUser, setIsAdmin } = useContext(AuthContext);
  const classes = useStyles();

  useEffect(() => {
    const unsubscribe = Firebase.auth().onIdTokenChanged((user) => {
      if (user) {
        user.getIdToken().then((idToken) => {
          const decoded = jwt_decode(idToken);
          setUser(user);
          setIsAdmin(decoded.admin);
          setInitialising(false);
          if (decoded.admin) {
            history.push("/admin");
          } else {
            history.push("/user");
          }
        });
      } else {
        setInitialising(false);
        history.push("/login");
      }
    });

    return () => {
      unsubscribe();
    };
  }, [history, setUser, setIsAdmin]);

  return (
    <div className={classes.container}>
      {initialising && <CircularProgress />}
    </div>
  );
};

export default Initial;
