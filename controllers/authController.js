const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../schemas/user");
const DBError = require("../utils/DBError");
const { promisify } = require("util");
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES;
const JWT_EXPIRATION_NUM = process.env.JWT_EXPIRATION_NUM;
const NODE_ENV = process.env.NODE_ENV;
const { ErrorHandler } = require("../utils/ErrorHandler.js");

// JWT
//////////////////////////////////////
// decode the JWT giving access to
// user.id, initiation time, and the expiration
const decryptJwt = async (token) => {
  const jwtVerify = promisify(jwt.verify);
  return await jwtVerify(token, JWT_SECRET);
};

// create valid jwt
const signJwt = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES,
  });
};

// set jwt options and send jwt as a cookie
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
// JWT
//////////////////////////////////////

// API
//////////////////////////////////////
// Helper function to encrypt passwords
const encryptPw = async (password) => {
  return await bcrypt.hash(password, 12);
};

exports.signup = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!password || !email) {
      next(new ErrorHandler(404, "Please enter an email and password"));
    }
    const pw = await encryptPw(password);
    const newUser = await User.create({
      email,
      password: pw,
    });
    console.log("newUser");
    sendToken(newUser, 201, req, res);
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  console.log("trying login");
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) return res.status(400).json({ message: "Login Failed" });
    const compared = await bcrypt.compare(password, user.password);
    compared
      ? sendToken(user, 200, req, res)
      : res.status(400).json({ message: "Login Failed" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
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

exports.secretContent = (req, res) => {
  res.status(200).json({ status: "SECRET CONTENT SHOWN!!!" });
};
//API
//////////////////////////////////////

// Middleware
//////////////////////////////////////
// secure routes for signed in users only
exports.secure = async (req, res, next) => {
  let token;
  if (req.cookies) token = req.cookies.jwt;
  if (!token || token === "expiredtoken") {
    return res.status(401).json({
      status: "unauthorized",
      message: "You are not authorized to view this content",
    });
  }
  const jwtInfo = await decryptJwt(token);
  const user = await User.findById(jwtInfo.id);
  if (!user) {
    return res.status(401).json({
      status: "unauthorized",
      message: "You are not authorized to view this content",
    });
  }
  req.user = user;
  next();
};

// secure routes by clearance.
// clearance is a prop of the userSchema
exports.clearanceLevel = (...clearanceLevel) => {
  return (req, res, next) => {
    clearanceLevel.includes(req.user.clearance)
      ? next()
      : res.status(401).json({
          status: "unauthorized",
          message: "Content not available at your current clearance level",
        });
  };
};

// A list of props not allowed in the
//body of an incoming request
exports.blackList = (...inputs) => {
  return (req, res, next) => {
    const { body } = req;
    let bodyProps;
    for (let prop in inputs) {
      bodyProps = inputs[prop];
      if (body[bodyProps]) delete body[bodyProps];
    }
    next();
  };
};
// Middleware
//////////////////////////////////////
