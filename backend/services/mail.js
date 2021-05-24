const axios = require("axios");
const { of } = require("await-of");

const sendEmail = async (userEmail) => {
  const [email, error] = await of(
    axios.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${process.env.API_KEY}`,
      {
        requestType: "PASSWORD_RESET",
        email: `${userEmail}`,
      }
    )
  );

  if (email) {
    console.info(`Sent password reset email to: ${email}`);
  }

  if (error) {
    console.error(error);
  }
};

module.exports = { sendEmail };
