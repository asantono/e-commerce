const DBError = (err) => {
  const errorCode = err.message.split(" ")[0];
  console.log(errorCode);
  switch (errorCode) {
    case "E11000":
      err.message = "This user already exists";
      return err;
    case "E50":
      err.message = "Request timed out";
      return err;

    default:
      err.message = "Database error. Please try again later...";
      return err;
  }
};

module.exports = DBError;
