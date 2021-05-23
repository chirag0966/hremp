import React, { useRef, useState } from "react";
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
import { createUser } from "../../Services/User";

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

const NewUser = () => {
  const formRef = useRef();
  const classes = useStyles();
  const history = useHistory();
  const [inProgress, setInProgress] = useState(false);

  const createNewUser = (e) => {
    e.preventDefault();

    const firstName = formRef.current[Keys.firstName].value;
    const lastName = formRef.current[Keys.lastName].value;
    const email = formRef.current[Keys.email].value;

    setInProgress(true);

    createUser({
      email,
      firstName,
      lastName,
    })
      .then(() => {
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
          <form ref={formRef} className={classes.form} onSubmit={createNewUser}>
            <div className={classes.inputFilelds}>
              <InputField label="First Name" id={Keys.firstName} />
              <InputField label="Last Name" id={Keys.lastName} />
              <InputField label="Email" id={Keys.email} />
            </div>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              type="submit"
            >
              Create
            </Button>
          </form>
        </Card>
        {inProgress && <LinearProgress className={classes.linearProgress} />}
      </div>
    </div>
  );
};

export default NewUser;
