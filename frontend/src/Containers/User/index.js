import React, { useContext } from "react";
import { Button, Card, CardContent, Typography } from "@material-ui/core";

import AuthContext from "../../Services/Auth/AuthContext";
import useStyles from "./styles";

const User = () => {
  const classes = useStyles();
  const { user } = useContext(AuthContext);

  return (
    <div className={classes.container}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h4">{user.displayName}</Typography>
          <br />
          <Typography>{user.email}</Typography>
          <Typography variant="subtitle2" color="textSecondary">
            {user.uid}
          </Typography>
        </CardContent>
        <CardContent>
          <div className={classes.punchContainer}>
            <div className={classes.time}>
              <Typography variant="caption">Punch In</Typography>
              <Typography variant="h6">_ _:_ _</Typography>
            </div>
            <div className={classes.time}>
              <Typography variant="caption">Punch Out</Typography>
              <Typography variant="h6">_ _:_ _</Typography>
            </div>
          </div>
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
          >
            IN
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default User;
