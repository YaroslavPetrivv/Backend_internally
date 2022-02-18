const express = require("express");
const app = express();
require("dotenv").config();
const createError = require("http-errors");
const { authRouter, questionRouters } = require("./routers");
const sequelize = require("./db/dbConect");

app.use(express.json());
app.use("/auth", authRouter);
app.use("/question", questionRouters);
app.use((req, res, next) => {
  next(createError(404));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
});

const PORT = process.env.PORT || 8080;
const connectionToDb = async () => {
  try {
    await sequelize.authenticate();
    app.listen(PORT, () => console.log(`server listen ${PORT} port`));
  } catch (e) {
    console.log(e);
  }
};

connectionToDb();
