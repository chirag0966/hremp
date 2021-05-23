const express = require("express");

const { createUser, getUsers } = require("../services/auth");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post("/user", createUser);
app.get("/users", getUsers);
