const express = require("express");
var cors = require("cors");

const { createUser, getUsers } = require("../services/auth");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post("/user", createUser);
app.get("/users", getUsers);
