import React, { useEffect } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";

import useStyles from "./styles";
import { getUsers } from "../../Services/Network/APIs/User";

const Admin = () => {
  const classes = useStyles();
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    getUsers().then((_users) => setUsers(_users));
  }, []);

  return (
    <>
      <List className={classes.root}>
        {users.map((user) => (
          <div key={user.uid}>
            <ListItem alignItems="flex-start">
              <ListItemText primary={user.displayName} />
              <ListItemText primary={user.email} />
              <ListItemText secondary={user.uid} />
            </ListItem>
            <Divider variant="fullWidth" component="li" />
          </div>
        ))}
      </List>
    </>
  );
};

export default Admin;
