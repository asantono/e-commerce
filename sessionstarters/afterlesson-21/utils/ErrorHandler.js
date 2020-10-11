class ErrorHandler extends Error {
  constructor(statusCode, message) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

const sendError = (err, res) => {
  let { statusCode, message } = err;
  let updatedErr = "";

  switch (err.name) {
    case "MongoError":
      updatedErr = { code: 400, msg: "Server Error" };
      break;
    case "ValidationError":
      updatedErr = { code: 400, msg: err.message };
      break;
    default:
      updatedErr = "";
      break;
  }

  if (updatedErr) {
    statusCode = updatedErr.code;
    message = updatedErr.msg;
  } else if (!statusCode) {
    statusCode = 500;
    message = "There is an error. Try again later";
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
