const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware");
const { questionConrollers, authConrollers } = require("../controllers");

router.post(
  "/registration",
  authMiddleware.registration,
  authConrollers.registrationUser
);
router.post(
  "/login",
  authMiddleware.login,
  authMiddleware.checkToken,
  authConrollers.loginUser
);

module.exports = router;
