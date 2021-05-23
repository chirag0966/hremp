const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const createUser = (req, res) => {
  const { firstName, lastName, email } = req.body;

  admin
    .auth()
    .createUser({
      email,
      displayName: firstName + " " + lastName,
    })
    .then((data) => {
      res.json({ message: "User created successfully!", data });
    })
    .catch((error) => {
      res.json({ message: "User could not be created", error });
    });
};

const getUsers = (_, res) => {
  admin
    .auth()
    .listUsers()
    .then((data) => {
      res.json({ message: "Users fetched successfully!", data });
    })
    .catch((error) => {
      res.json({ message: "Users could not be fetched", error });
    });
};

module.exports = {
  createUser,
  getUsers,
};
