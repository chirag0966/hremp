import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { AccountCircle } from "@material-ui/icons";

import useStyles from "./styles";
import { AppBar } from "@material-ui/core";

const Admin = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [users, setUsers] = React.useState([
    {
      name: "Chirag Bhaiji",
      email: "chirag0966@gmail.com",
      username: "cbhaiji",
    },
    {
      name: "Siddharth Bhaiji",
      email: "siddharth10297@gmail.com",
      username: "siddharth10297",
    },
  ]);

  return (
    <>
      <AppBar></AppBar>
      <List className={classes.root}>
        {users.map((user) => (
          <div>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <AccountCircle size={50} />
              </ListItemAvatar>
              <ListItemText
                primary={user.name}
                secondary={`${user.username} | ${user.email}`}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    </>
  );
};

export default Admin;
