const { hash } = require("../helpers/hashFunction");
const { User } = require("../db/models");
const { generateTokenPair } = require("../helpers/tokensFunction");

module.exports = {
  registrationUser: async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const hashPassword = await hash(password);

      await User.create({
        email: email,
        password: hashPassword,
      });
      const { accessToken, refreshToken } = generateTokenPair();
      res.status(200).json(accessToken, refreshToken);
    } catch (e) {
      next(e);
    }
  },

  loginUser: async (req, res, next) => {
    try {
      const { email } = req.body;
      const { accessToken, refreshToken } = generateTokenPair();

      res.status(200).json("User was creat");
    } catch (e) {
      next(e);
    }
  },
};
