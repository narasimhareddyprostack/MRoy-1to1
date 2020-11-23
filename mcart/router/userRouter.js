//router logic
//what is API?
const express = require("express");
const router = express.Router();
const User = require("../model/User");
const { check, validationResult } = require("express-validator");

//www.ecart.com/user/register  - name, email, password
//www.ecart.com/user/login  -  email, password
//www.ecart.com/user/  -
//www.ecart.com/user/profile  - address
router.get("/", (req, res) => {
  res.send("Inside - first Get request");
});
router.post(
  "/register",
  [
    check("name").notEmpty().withMessage("User Name is Required"),
    check("email").isEmail().withMessage("Please Enter Proper Email"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  (request, response) => {
    console.log("inside post request");
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
      console.log("Lot of Erros");
      return response.status(401).json({ errors: errors.array });
    }
    try {
      //save form data , into database
      //read the from data

      let { name, email, password } = request.body;
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
      let user = new User({ name, email, password, address });
      user = user.save();
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
router.get("/", (req, res) => {
  console.log("inside user route");
  res.send("user - root : Get Request");
});
module.exports = router;
//export default router;
