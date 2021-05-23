import * as admin from "firebase-admin";
import serviceAccount from "./hremp-51f09-ba680c30d4bf";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export default admin.auth;
