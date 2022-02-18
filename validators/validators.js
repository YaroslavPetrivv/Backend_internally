const Joi = require("joi");
const { EMAIL_REGEXP } = require("../const/regexp");

module.exports = {
  authAndLogin: Joi.object().keys({
    email: Joi.string().pattern(EMAIL_REGEXP).required(),
    password: Joi.string().min(5).required(),
  }),
};
