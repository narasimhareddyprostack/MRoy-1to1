const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1> Welcome to PSA</h1>");
});

app.get("/order", (req, res) => {
   const obj = req.query;
   console.log(obj);
   res.send(obj);
  //res.send(req.query.id);
});

app.get("/order/:id", (req, res) => {
  res.send(req.params.id);
});

app.listen(6500, (err) => {
  console.log("Express Server Running...");
});
