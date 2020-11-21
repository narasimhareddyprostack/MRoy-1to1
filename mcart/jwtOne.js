const jwt = require("jsonwebtoken");
let user = {
  id: "18-abc-4567",
  name: "Narasimha Reddy",
  email: "greetlabs@gmail.com",
};
let payload = {
  id: user.id,
  name: user.name,
  email: user.email,
};
let secretKey = "ssshhhh";
let token = jwt.sign(payload, secretKey, { expiresIn: 3600 });
console.log(token);
//To Verify the Token
//jwt.verify(token)
// jwt.verify(token, secretkey, () => {});
jwt.verify(token, secretKey, (err, token) => {
  if (err) throw err;
  console.log(token);
});
