const jwt = require("jsonwebtoken");

let authenticate = (request, resposne, next) => {
  if (!request.headers.authorization) {
    return resposne.status(401).send("Unauthorized Request");
  }
  let token = request.headers.authorization.split("")[1];
  if (token === null) {
    return resposne.status(401).send("Unauthorized Request");
  }
  let payload = jwt.verify(token, process.env.JWT_SECRET_KEY);
  console.log(payload);
  if (!payload) {
    return resposne.status(401).send("Unauthorized Request");
  }
  request.user = payload.user;
  next();
};

module.exports = authenticate;
