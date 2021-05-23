import React from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

import useStyles from "./styles";

const AppHeader = ({ onCreateUserTap }) => {
  const classes = useStyles();

  const handleCreateUserTap = () => {
    onCreateUserTap();
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
