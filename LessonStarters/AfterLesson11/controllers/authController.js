const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../schemas/user");
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES = process.env.JWT_EXPIRES;

const signJwt = (id) => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRES,
  });
};

const sendToken = (user, statusCode, req, res) => {
  const token = signJwt(user._id);
  res.cookie("jwt", token, {
    expires: new Date(Date.now() + JWT_EXPIRES),
    secure: true,
    httpOnly: true,
  });

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
  console.log(email);
  const pw = await encryptPw(password);
  console.log(pw);
  try {
    const newUser = await User.create({
      email,
      password: pw,
    });
    console.log(newUser);
    sendToken(newUser, 201, req, res);
  } catch (err) {
    res.status(401).json(err.message);
  }
  console.log("SIGNUP HIT");
};
