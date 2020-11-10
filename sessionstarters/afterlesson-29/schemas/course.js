const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "A title is required"],
  },
  img: {
    type: String,
  },
  author: {
    type: String,
  },
  price: {
    type: Number,
    required: [true, "A price is required"],
  },
  saleOptIn: {
    type: Boolean,
    default: true,
  },
  position: {
    type: Number,
  },
  length: {
    type: String,
    default: "varies",
  },
  accessType: {
    type: String,
    default: "lifetime access",
  },
  certification: {
    type: String,
    default: true,
  },
  adText: {
    type: String,
    required: [true, "An adText is required"],
  },
  features: {
    type: Array,
    required: [true, "Features are required"],
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
