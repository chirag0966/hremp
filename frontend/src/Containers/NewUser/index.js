import React, { useRef } from "react";
import { Button, Card, FormControl, Input } from "@material-ui/core";

import useStyles from "./styles";
import { Keys } from "../../Constants";

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

  const createNewUser = (e) => {
    e.preventDefault();

    const firstName = formRef.current[Keys.firstName].value;
    const lastName = formRef.current[Keys.lastName].value;
    const email = formRef.current[Keys.email].value;

    console.log(firstName, lastName, email);
  };

  return (
    <div className={classes.container}>
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
    </div>
  );
};

export default NewUser;
