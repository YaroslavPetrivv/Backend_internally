const creatError = require("http-errors");
const { User } = require("../db/models");
const {
  authFunction: { hash },
} = require("../helpers");
const { validLoginOrRegistrationData } = require("../helpers/helpers");
const { compare } = require("../helpers/hashFunction");

module.exports = {
  registration: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      const errorData = validLoginOrRegistrationData(req.body);

      if (errorData) {
        next(errorData);
      }

      const user = await User.findOne({ where: { email } });

      if (user) {
        next(creatError(409, `email ${email} already exists`));
        return;
      }
      next();
    } catch (e) {
      next(e);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const errorData = validLoginOrRegistrationData(req.body);

      if (errorData) {
        next(errorData);
      }

      const user = await User.findOne({ where: { email } });

      if (!user) {
        next(creatError(404, `user undefined`));
        return;
      }
      //check password
      const isLogin = await compare(password, user.password);

      if (!isLogin) {
        next(creatError(401, `wrong email or password`));
        return;
      }

      next();
    } catch (e) {
      next(e);
    }
  },
  checkToken: async (req, res, next) => {
    try {
      const token = req.headers.authorization.split(" ")[1];

      if (!token) {
        next(creatError(401, `unauthorized user `));
      }
      next();
    } catch (e) {
      next(e);
    }
  },
};
