import React, { useContext, useRef, useState } from "react";
import { useHistory } from "react-router";
import {
  Button,
  Card,
  FormControl,
  Input,
  LinearProgress,
} from "@material-ui/core";

import useStyles from "./styles";
import { Keys } from "../../Constants";
import { login } from "../../Services/Auth";
import AuthContext from "../../Services/Auth/AuthContext";

const InputField = ({ label, id }) => {
  const classes = useStyles();

  return (
    <div className={classes.inputField}>
      <FormControl>
        <Input id={id} placeholder={label} />
      </FormControl>
    </div>
  );
};

const Login = () => {
  const formRef = useRef();
  const classes = useStyles();
  const history = useHistory();
  const [inProgress, setInProgress] = useState(false);
  const { setUser } = useContext(AuthContext);

  const loginUser = (e) => {
    e.preventDefault();

    const password = formRef.current[Keys.password].value;
    const email = formRef.current[Keys.email].value;

    setInProgress(true);

    login({ email, password })
      .then((user) => {
        setUser(user);
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
    </div>
  );
};

export default Login;
