const { User } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET}  = require("../config");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const token = req.headers.authorization;
  const fullToken = token.split(" ");
  const jwtToken = fullToken[1];
  const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
  if (decodedValue.username) {
    next();
  } else {
    res.json({
      massage: "Please enter the right Credential",
    });
  }
}

module.exports = userMiddleware;
