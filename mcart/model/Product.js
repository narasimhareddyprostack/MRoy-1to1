const mongoose = require("mongoose");

let ProductSchema = new mongoose.Schema({
  name: { type: String, require: true },
  brand:{ type: String, require: true },
  image:{ type: String, require: true },
  price:{ type: Number, require: true },
  qty:{ type: Number, require: true },
  category:{ type: String, require: true },
  description:{ type: String, require: true },
  usage:{ type: String, require: true },
  created:{ type:Date, default: Date.now()}
});

let Product = mongoose.model("product", ProductSchema);
module.exports = Product;
