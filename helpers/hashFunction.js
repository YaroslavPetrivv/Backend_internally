const { hash, compare } = require("bcrypt");

module.exports = {
  hash: (password) => hash(password, 10),
  compare: (password, hashPassword) => compare(password, hashPassword),
};
