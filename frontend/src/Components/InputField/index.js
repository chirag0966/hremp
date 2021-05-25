import React from "react";
import { FormControl, TextField } from "@material-ui/core";

import { Keys } from "../../Constants";
import useStyles from "./styles";

const InputField = ({ label, id }) => {
  const classes = useStyles();

  const type = () => {
    switch (id) {
      case Keys.password:
        return "password";
      case Keys.email:
        return "email";
      default:
        return "text";
    }
  };

  return (
    <div className={classes.inputField}>
      <FormControl>
        <TextField id={id} placeholder={label} type={type()} />
      </FormControl>
    </div>
  );
};

export default InputField;
