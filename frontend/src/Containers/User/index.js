import React, { useContext, useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@material-ui/core";

import AuthContext from "../../Services/Auth/AuthContext";
import useStyles from "./styles";
import { punchTimeDisplay } from "../../Utilities/Time";
import { Strings } from "../../Constants";
import { addEntry, getEntries } from "../../Services/Store";

const User = () => {
  const classes = useStyles();
  const { user } = useContext(AuthContext);
  const [inTime, setInTime] = useState(null);
  const [outTime, setOutTime] = useState(null);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    getEntries().then((_entries) => setLogs(_entries));
  }, []);

  useEffect(() => {
    if (inTime !== null && outTime !== null) {
      addEntry(inTime, outTime).then(() => {
        setInTime(null);
        setOutTime(null);
        getEntries().then((_entries) => setLogs(_entries));
      });
    }
  }, [inTime, outTime]);

  function handlePunch() {
    if (inTime) {
      setOutTime(Date.now());
      return;
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
      <Card className={classes.entriesCard}>
        {Object.keys(logs).map((day) => (
          <div key={day}>
            <div>
              <Typography color="primary" variant="h6">
                {day}
              </Typography>
            </div>
            {logs[day].map((_entry) => (
              <Typography
                color="textSecondary"
                key={_entry.inTime + "" + _entry.outTime}
                variant="subtitle1"
              >
                {`${punchTimeDisplay(_entry.inTime)} to ${punchTimeDisplay(
                  _entry.outTime
                )}`}
              </Typography>
            ))}
            <br />
          </div>
        ))}
      </Card>
    </div>
  );
};

export default User;
