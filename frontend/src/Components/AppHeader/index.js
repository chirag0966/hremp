import React, { useContext } from "react";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import { PowerSettingsNew } from "@material-ui/icons";
import { useHistory } from "react-router";

import useStyles from "./styles";
import AuthContext from "../../Services/Auth/AuthContext";
import { logout } from "../../Services/Auth";

const AppHeader = () => {
  const classes = useStyles();
  const history = useHistory();
  const { user, setUser, isAdmin, setIsAdmin } = useContext(AuthContext);

  const handleCreateUserTap = () => {
    history.push("/newUser");
  };

  const handleLogoutTap = () => {
    logout()
      .then(() => {
        setUser(null);
        setIsAdmin(false);
        history.push("/login");
      })
      .catch(console.error);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h6"
          className={classes.title}
          onClick={() => history.push("/")}
        >
          HREmp
        </Typography>
        {user && (
          <>
            {isAdmin && (
              <Button variant="contained" onClick={handleCreateUserTap}>
                Add User
              </Button>
            )}
            <Button variant="text" onClick={handleLogoutTap}>
              <PowerSettingsNew color="secondary" size={60} />
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
