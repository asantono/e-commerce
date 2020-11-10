const express = require("express");
const stripeController = require("../controllers/stripeController");

const router = express.Router();

router.route("/singlecharge").post(stripeController.singleCharge);

module.exports = router;
