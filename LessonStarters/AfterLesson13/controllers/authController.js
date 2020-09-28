const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../schemas/user");
// const { promisify } = require("util");
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES;
const JWT_EXPIRATION_NUM = process.env.JWT_EXPIRATION_NUM;
const NODE_ENV = process.env.NODE_ENV;

const signJwt = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES,
  });
};

const sendToken = (user, statusCode, req, res) => {
  const token = signJwt(user._id);
  const options = {
    expires: new Date(Date.now() + JWT_EXPIRATION_NUM),
    secure: NODE_ENV === "prodution" ? true : false,
    httpOnly: NODE_ENV === "production" ? true : false,
  };
  res.cookie("jwt", token, options);

  user.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    user,
  });
};

const encryptPw = async (password) => {
  return await bcrypt.hash(password, 12);
};

exports.signup = async (req, res) => {
  const { email, password } = req.body;
  const pw = await encryptPw(password);
  try {
    const newUser = await User.create({
      email,
      password: pw,
    });
    sendToken(newUser, 201, req, res);
  } catch (err) {
    res.status(401).json(err.message);
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  console.log("LOGIN!!!!!!!!!!");
  try {
    const user = await User.findOne({ email }).select("+password");
    const compared = await bcrypt.compare(password, user.password);
    compared
      ? sendToken(user, 200, req, res)
      : res.status(400).json({ message: "Login Failed" });
  } catch (err) {
    console.log(err);
    res.status(400).json(err.message);
  }
};

exports.logout = async (req, res) => {
  const options = {
    expires: new Date(Date.now() + 10000),
    secure: NODE_ENV === "prodution" ? true : false,
    httpOnly: NODE_ENV === "production" ? true : false,
  };
  res.cookie("jwt", "expiredtoken", options);
  res.status(200).json({ status: "success" });
};
