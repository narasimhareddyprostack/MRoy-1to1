//router logic
//what is API?
const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");

const User = require("../model/User");
const { check, validationResult } = require("express-validator");

//www.ecart.com/user/register  - name, email, password
//www.ecart.com/user/login  -  email, password
//www.ecart.com/user/  -
//www.ecart.com/user/profile  - address

router.get("/", (req, res) => {
  res.send("Inside - first Get request");
});

/*
http://localhost:8000/user/
*/
router.get("/", (req, res) => {
  console.log("inside user route");
  res.send("user - root : Get Request");
});

/*
 API : localhost:8000/user/register  - api

 fields: name, email, password
*/
router.post(
  "/register",
  [
    check("name").notEmpty().withMessage("User Name is Required"),
    check("email").isEmail().withMessage("Please Enter Proper Email"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  async (request, response) => {
    console.log("inside post request");
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
      console.log("Lot of Erros");
      return response.status(401).json({ errors: errors.array() });
    }
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

      let address = {
        flat: " ",
        street: " ",
        landmark: " ",
        pin: " ",
        city: " ",
        country: " ",
        state: " ",
        mobile: " ",
      };
      let salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
      console.log(password);
      user = new User({ name, email, password, address });
      user = await user.save();
      response.status(200).json({
        result: "success",
        user: user,
      });
    } catch (error) {}
  }
);
// router.post("/login");
// router.post("/profile");
// router.get("/");

module.exports = router;
//export default router;
