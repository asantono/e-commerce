const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/logout").get(authController.logout);

router.use(authController.secure);
router.use(authController.clearanceLevel("level 1"));
router.route("/secretcontent").get(authController.secretContent);

module.exports = router;
