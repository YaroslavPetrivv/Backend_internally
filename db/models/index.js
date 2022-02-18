const User = require("./userModel");
const Question = require("./questionModel");

User.hasMany(Question);
Question.belongsTo(User);

module.exports.User = User;
module.exports.Question = Question;
