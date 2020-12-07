/*
//order routes
//import Order from "./../../ReactB/rbasics/src/Order";
//Two API - Order, List of Order : Employee
const express = require("express");
const router = express.Router();
const Order = require("../model/Order");
const User = require("../model/User");
const { check, validationResult } = require("express-validator");

router.post(
  "/",
  [
    check("items").notEmpty().withMessage("Items is Required"),
    check("Total").notEmpty().withMessage("Total is Required"),
  ],
  (request, response) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(401).json({ errors: errors.array() });
    }
    //Order Logic
    //generate Order and save into MonogDB
    try {
      let orderone = {
        items: request.body.items,
        tax: request.body.tax,
        tota: request.body.total,
      };
      let order = new Order(orderone);
      order = order.save();
    } catch (error) {}
  }
);
router.post("/list");
*/
