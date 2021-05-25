import React, { useContext, useState } from "react";
import { Button, Card, CardContent, Typography } from "@material-ui/core";

import AuthContext from "../../Services/Auth/AuthContext";
import useStyles from "./styles";
import { punchTimeDisplay } from "../../Utilities/Time";
import { Strings } from "../../Constants";

const User = () => {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const [inTime, setInTime] = useState(null);
  const [outTime, setOutTime] = useState(null);

  function handlePunch() {
    if (inTime) {
      setOutTime(Date.now());
    }
    setInTime(Date.now());
  }

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
        <CardContent className={classes.punchContainer}>
          <div className={classes.timeContainer}>
            <div className={classes.time}>
              <Typography variant="caption">{Strings.in}</Typography>
              <Typography variant="h6">
                {punchTimeDisplay(inTime) ?? Strings.punchTimePlaceholder}
              </Typography>
            </div>
            <div className={classes.time}>
              <Typography variant="caption">{Strings.out}</Typography>
              <Typography variant="h6">
                {punchTimeDisplay(outTime) ?? Strings.punchTimePlaceholder}
              </Typography>
            </div>
          </div>
          <Button
            className={classes.button}
            color="primary"
            variant="contained"
            disabled={inTime !== null && outTime !== null}
            onClick={handlePunch}
          >
            {inTime ? Strings.out : Strings.in}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default User;
