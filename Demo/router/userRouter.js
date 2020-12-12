const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../model/User");
/*
 API : localhost:8000/user/register  - api

 fields: name, email, password
*/
router.post("/register", async (request, response) => {
  try {
    //user existed or not- need to check;
    let { name, email, password } = request.body;
    let user = await User.findOne({ email: email });
    console.log(user);
    if (user) {
      return response
        .status(401)
        .json({ errors: [{ msg: "User Already Exits- Please Login" }] });
    }
    //save form data , into database
    //read the from data
    let salt = await bcrypt.genSalt(10);
    password = await bcrypt.hash(password, salt);
    console.log(password);
    user = new User({ name, email, password });
    user = await user.save();
    response.status(200).json({
      result: "success",
      user: user,
    });
  } catch (error) {
    return response.status(500).json({ errors: "Server Error" });
  }
});

module.exports = router;
//export default router;
