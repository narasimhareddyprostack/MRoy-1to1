const bcrypt = require("bcryptjs");

let user = {
  name: "Narasimha Reddy",
  email: "greetlabs@gmail.com",
  password: "123@123A",
};
let x = bcrypt.genSaltSync(1);
let hashedPassword = bcrypt.hashSync(user.password, x);

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
