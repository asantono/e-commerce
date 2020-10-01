const DBError = require("./DBError");

class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const sendError = (err, res) => {
  let { statusCode, message } = err;
  if (message) console.log(message);
  let updatedErr = "";
  if (err.name === "MongoError") {
    updatedErr = DBError(err.code);
  }
  if (err.name === "ValidationError") {
    updatedErr = { code: 400, msg: "Invalid inputs" };
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
