const User = require("../schemas/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES;
const JWT_EXPIRATION_NUM = process.env.JWT_EXPIRATION_NUM;
const NODE_ENV = process.env.NODE_ENV;

const encryptPW = async (password) => {
  return await bcrypt.hash(password, 12);
};

const makeJwt = (id) => {
  console.log(JWT_SECRET);
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES,
  });
};

const sendToken = (user, statusCode, req, res) => {
  const token = makeJwt(user._id);
  const options = {
    expires: new Date(Date.now() + JWT_EXPIRATION_NUM),
    secure: NODE_ENV === "production",
    httpOnly: NODE_ENV === "production",
  };
  res.cookie("jwt", token, options);

  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const pw = await encryptPW(password);
    const newUser = await User.create({
      email,
      password: pw,
    });
    sendToken(newUser, 201, req, res);
  } catch (err) {
    console.log("error occured");
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    const compared = await bcrypt.compare(password, user.password);
    user.password = null;
    compared
      ? sendToken(user, 200, req, res)
      : res.status(400).json({ message: "Login failed" });
  } catch (err) {
    console.log(err);
  }
};
