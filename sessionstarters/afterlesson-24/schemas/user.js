const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: [true, "Email is invalid"],
    validate: [validator.isEmail, "Email is invalid"],
  },
  password: {
    type: String,
    select: false,
  },
  clearance: {
    type: String,
    enum: {
      values: ["user", "instructor", "admin"],
      message: "The clearance value is invalid",
    },
    default: "user",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
