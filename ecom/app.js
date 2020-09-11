import express from "express";
const productRouter = express.Router();
const orderRouter = express.Router();
//es6
var app = express();
//static path setting
app.use(express.static(__dirname + "/public"));
app.set("views", "./src/view");
app.set("view engine", "ejs");
const menu = [
  { link: "/", name: "Home" },
  { link: "/products", name: "Products" },
  { link: "/orders", name: "Orders" },
];
app.get("/", (req, res) => {
  res.render("index", {
    message: "Welcome to ECOM",
    menu: menu,
  });
});
productRouter.route("/").get((req, res) => {
  res.render("products", {
    message: "Product Page",
    menu: menu,
  });
});
productRouter.route("/details").get((req, res) => {
  res.render("product_details", {
    message: "Product Details Page",
    menu: menu,
  });
});
productRouter.route("/count").get((req, res) => {
  res.render("product_details", {
    message: "Count Page",
    menu: menu,
  });
});
orderRouter.route('/').
  get((req, res) => {
  res.render("orders", {
    message: "Order Page",
    menu: menu,
  });
});
orderRouter.route('/details').
    get((req, res) => {
      res.render("order_details", {
        message: "Order Details Page",
        menu: menu,
  });
});

app.use("/products", productRouter);
app.use("/orders", orderRouter);

app.listen(8000, (err) => {
  console.log(`Server Running on Port: ${8000}`);
});
