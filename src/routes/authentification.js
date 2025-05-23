const express = require("express");
const router = express.Router();
const authController = require("../controllers/authentification.controller");
const tokenMdw = require("../middlewares/jwt.middleware");

router.post("/login", authController.login);
router.post("/logout", tokenMdw, authController.logout);

module.exports = router;
