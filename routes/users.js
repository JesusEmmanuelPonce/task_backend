const express = require("express");
const router = express.Router();
const userControlloer = require("../controllers/userController");

router.post("/create", userControlloer.userCreate);

module.exports = router;