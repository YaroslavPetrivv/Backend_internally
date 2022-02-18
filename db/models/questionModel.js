const sequelize = require("../dbConect");
const { DataTypes } = require("sequelize");
const { QUESTION_MODELS } = require("../models");

const QuestionModel = sequelize.define(QUESTION_MODELS, {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  body: {
    type: DataTypes.TEXT,
    defaultValue: "",
  },
});

module.exports = QuestionModel;
