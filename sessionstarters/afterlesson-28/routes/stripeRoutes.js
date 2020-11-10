const express = require("express");
const stripeController = require("../controllers/stripeController");
const authController = require("../controllers/authController");

const router = express.Router();

router.route("/singlecharge").post(stripeController.singleCharge);

router.use(authController.addUserToRequest);

router.route("/savecardandcharge").post(stripeController.saveCardAndCharge);

module.exports = router;
