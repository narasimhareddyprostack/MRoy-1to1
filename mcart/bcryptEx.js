const bcrypt = require("bcryptjs");
let user = {
  name: "Narasimha Reddy",
  email: "greetlabs@gmail.com",
  password: "123@123A",
};
let salt = bcrypt.genSaltSync(10); //default salt rounds
let hashedPassword = bcrypt.hashSync(user.password, salt);
console.log(hashedPassword);
let updatedUser = {
  ...user,
  password: hashedPassword,
};
console.log(updatedUser);
if (bcrypt.compareSync("123@123A1", hashedPassword)) {
  console.log("Password Match");
} else {
  console.log("Password not Match");
}
