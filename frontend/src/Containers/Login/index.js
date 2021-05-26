import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router";
import {
  Button,
  Card,
  CircularProgress,
  LinearProgress,
} from "@material-ui/core";

import useStyles from "./styles";
import { Keys } from "../../Constants";
import { login } from "../../Services/Auth";
import InputField from "../../Components/InputField";
import Firebase from "../../Services/Firebase";

const Login = () => {
  const formRef = useRef();
  const classes = useStyles();
  const history = useHistory();
  const [inProgress, setInProgress] = useState(false);
  const [isCheckingCurrentUser, setIsCheckingCurrentUser] = useState(true);

  useEffect(() => {
    const unsubscibe = Firebase.auth().onAuthStateChanged((user) => {
      setIsCheckingCurrentUser(false);
      if (user) {
        history.replace("/");
      }
    });
    return () => {
      unsubscibe();
    };
  }, [history]);

  const loginUser = (e) => {
    e.preventDefault();

    const password = formRef.current[Keys.password].value;
    const email = formRef.current[Keys.email].value;

    setInProgress(true);

    login({ email, password })
      .then((user) => {
        setInProgress(false);
        history.push("/");
      })
      .catch((error) => {
        setInProgress(false);
        // Show error to the user
        console.error(error);
      });
  };

  return (
    <div className={classes.container}>
      {isCheckingCurrentUser ? (
        <CircularProgress color="primary" />
      ) : (
        <div className={classes.cardLine}>
          <Card className={classes.card}>
            <form ref={formRef} className={classes.form} onSubmit={loginUser}>
              <div className={classes.inputFilelds}>
                <InputField label="Email" id={Keys.email} />
                <InputField label="Password" id={Keys.password} />
              </div>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
            </form>
          </Card>
          {inProgress && <LinearProgress className={classes.linearProgress} />}
        </div>
      )}
    </div>
  );
};

export default Login;
