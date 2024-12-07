const { Admin } = require("../db/index");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
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

module.exports = adminMiddleware;
