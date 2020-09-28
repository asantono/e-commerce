const DBError = (code) => {
  switch (code) {
    case 11000:
      return { code: 400, msg: "This user already exists" };
    case 50:
      return { code: 401, msg: "Request timed out" };
    default:
      return { code: 500, msg: "Database error. Please try again later..." };
  }
};
module.exports = DBError;
