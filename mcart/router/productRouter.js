const express = require("express");
const router = express.Router();
const Product = require("../model/Product");
const { check, validationResult } = require("express-validator");

/*
Upload Product
Field: name, brand, price, qty, description, usage, category, image
*/
router.post(
  "/upload",
  [
    check("name").notEmpty().withMessage("Product Name is Required"),
    check("brand").notEmpty().withMessage("Brand Name is Required"),
    check("image").notEmpty().withMessage("Product Image is Required"),
    check("usage").notEmpty().withMessage("Product usage is Required"),
    check("description").notEmpty().withMessage("Product desc is Required"),
    check("price").notEmpty().withMessage("Product price is Required"),
    check("qty").notEmpty().withMessage("Product QTY is Required"),
    check("category").notEmpty().withMessage("Product Category is Required"),
  ],
  async (request, response) => {
    let errors = validationResult(request);
    if (!errors.isEmpty()) {
      return response.status(401).json({ errors: errors.array() });
    }
    try {
      //save the product in Product collection with help of schema.
      let newProduct = {
        name: request.body.name,
        brand: request.body.brand,
        image: request.body.image,
        price: request.body.price,
        qty: request.body.qty,
        category: request.body.category,
        description: request.body.description,
        usage: request.body.usage,
      };
      let product = new Product(newProduct);
      product = await product.save();
      response.status(200).json({
        result: "Success",
        product: product,
      });
    } catch (error) {
      response.status(500).json({ errors: [{ msg: "Server Errors}" }] });
    }
  }
);

router.get("/men", async (request, response) => {
  try {
    let products = await Product.find({ category: "Mens" });
    response.status(200).json(products);
  } catch (error) {
    response.status(500).json({ errors: [{ msg: "Server Errors}" }] });
  }
});

router.get("/women", async (request, response) => {
  try {
    let products = await Product.find({ category: "Womens" });
    response.status(200).json(products);
  } catch (error) {
    response.status(500).json({ errors: [{ msg: "Server Errors}" }] });
  }
});
router.get("/kids", async (request, response) => {
  try {
    let products = await Product.find({ category: "Kids" });
    response.status(200).json(products);
  } catch (error) {
    response.status(500).json({ errors: [{ msg: "Server Errors}" }] });
  }
});
module.exports = router;
