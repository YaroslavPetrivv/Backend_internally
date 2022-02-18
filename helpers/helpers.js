const { authAndLogin } = require("../validators/validators");
const creatError = require("http-errors");

module.exports = {
  validLoginOrRegistrationData: (data) => {
    const { error } = authAndLogin.validate(data);
    if (error) {
      return creatError(400, error.details[0].message);
    }
  },
};
