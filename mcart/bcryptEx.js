const bcrypt = require("bcryptjs");
let user = {
  name: "Narasimha Reddy",
  email: "greetlabs@gmail.com",
  password: "123@123A",
  creditCardNo: "6123 1234 4567 5467",
};
let salt = bcrypt.genSaltSync(10); //default salt rounds
let hashedPassword = bcrypt.hashSync(user.password, salt);
let hashedCCNo = bcrypt.hashSync(user.creditCardNo, salt);

console.log(hashedPassword);
console.log(hashedCCNo);

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
if (bcrypt.compareSync("6123 1234 4567 5467", hashedCCNo)) {
  console.log("CC Match");
} else {
  console.log("CC not Match");
}
