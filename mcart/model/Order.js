const mongoose = require("mongoose");

let OrderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  items: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      qty: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  tax: { type: Number, required: true },
  created: { type: Date, default: Date.now()},
});
let Order = mongoose.model("order", OrderSchema);
module.exports = Order;
