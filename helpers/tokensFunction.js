const jwt = require("jsonwebtoken");

module.exports = {
  generateTokenPair: (id) => {
    return {
      accessToken: jwt.sign({ id: id }, process.env.SECRET_ACCESS, {
        expiresIn: "12h",
      }),
      refreshToken: jwt.sign({ id: id }, process.env.SECRET_REFRESH, {
        expiresIn: "30d",
      }),
    };
  },

  decodedTokens: (token, typeTokens = "ACCESS") => {
    if (typeTokens === "ACCESS") {
      jwt.verify(token);
    }
  },
};
