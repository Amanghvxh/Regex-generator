const express = require("express");
const generateRegex = require("../controllers/regex");
const router = express.Router();

router.route("/").post(generateRegex);

module.exports = router;
