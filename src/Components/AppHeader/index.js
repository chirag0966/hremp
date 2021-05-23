import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { useHistory } from "react-router";

import useStyles from "./styles";

const AppHeader = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleCreateUserTap = () => {
    history.push("/newUser");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          DigiBea
        </Typography>
        <Button variant="contained" onClick={handleCreateUserTap}>
          Add User
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
