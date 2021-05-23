const admin = require("firebase-admin");

const serviceAccount = require("./serviceAccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const createUser = (req, res) => {
  const { firstName, lastName, email } = req.body;

  admin
    .auth()
    .verifyIdToken()
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

const getUsers = (req, res) => {
  const idToken = req.get("idToken");

  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;

      if (uid !== "93iJR7bofSbTwSqNUYM4fmj8p0P2") {
        res.json({ message: "You are not allowed to get users", data: [] });
      }

      admin
        .auth()
        .listUsers()
        .then((data) => {
          res.json({ message: "Users fetched successfully!", data });
        })
        .catch((error) => {
          res.json({ message: "Users could not be fetched", error });
        });
    })
    .catch((error) => {
      res.json({ message: "Authentication failed", error, idToken });
    });
};

module.exports = {
  createUser,
  getUsers,
};
