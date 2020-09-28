const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/logout").get(authController.logout);

// All routes after authController.secure are only available to
// logged in users
router.use(authController.secure);
// All routes after authController.clearanceLevel are only available
// to user's with the proper clearance in their userSchema
router.use(authController.clearanceLevel("level 1"));
router.route("/secretcontent").get(authController.secretContent);

module.exports = router;
