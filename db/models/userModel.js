const sequelize = require("../dbConect");
const { DataTypes } = require("sequelize");

const {
  modelsConstants: { USER_MODELS },
} = require("../../const");

const User = sequelize.define(USER_MODELS, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    require: true,
  },
  password: {
    type: DataTypes.STRING,
    require: true,
  },
});

module.exports = User;
