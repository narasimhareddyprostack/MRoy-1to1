const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1> Welcome to PSA</h1>");
});

app.get("/order", (req, res) => {
  res.send(req.query);
  //res.send(req.query.name);
});

app.get("/order/:id", (req, res) => {
  res.send(req.params.id);
});

app.listen(6500, (err) => {
  console.log("Express Server Running...");
});
