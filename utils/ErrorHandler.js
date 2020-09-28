const DBError = require("./DBError");

class ErrorHandler extends Error {
  constructor(statusCode, message, util) {
    super();
    this.statusCode = statusCode;
    this.message = message;
    this.util = util;
  }
}

const sendError = (err, res) => {
  let { statusCode, message } = err;
  //console.log(err);
  if (message) console.log(message);
  let updatedErr = "";
  if (err.name === "MongoError") {
    updatedErr = DBError(err.code);
  }
  if (err.name === "ValidationError") {
    updatedErr = { code: 401, msg: "Invalid inputs" };
  }
  if (updatedErr) {
    statusCode = updatedErr.code;
    message = updatedErr.msg;
  }
  if (!statusCode) {
    statusCode = 500;
    message = "There is an error. Please try again later";
  }
  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};

module.exports = {
  ErrorHandler,
  sendError,
};
