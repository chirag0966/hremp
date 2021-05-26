import firebase from "firebase/app";
import "firebase/firestore";
import { getDayString } from "../../Utilities/Time";

import Firebase from "../Firebase";

const store = Firebase.firestore();

const addEntry = (inTime, outTime) => {
  const { uid } = Firebase.auth().currentUser;

  const userDocRef = store
    .collection("users")
    .doc(uid)
    .collection("logs")
    .doc(getDayString());

  return userDocRef
    .set(
      {
        entries: firebase.firestore.FieldValue.arrayUnion({ inTime, outTime }),
      },
      { merge: true }
    )
    .then(() => {
      return;
    });
};

const getEntries = () => {
  const { uid } = Firebase.auth().currentUser;

  const docRef = store.collection("users").doc(uid).collection("logs");

  return docRef
    .get()
    .then((querySnapshot) => {
      const data = {};
      querySnapshot.forEach((doc) => {
        data[doc.id] = doc.data().entries;
      });
      return data;
    })
    .catch(console.error);
};

export { addEntry, getEntries };
