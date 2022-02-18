const express = require("express");
const router = express.Router();

router.get("/question");
router.post("/question");
router.get("/question/:id");
router.put("/question/:id");
router.delete("/login/:id");

module.exports = router;
