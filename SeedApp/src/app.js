import express from "express";

//es6
var app = express();
app.get("/", (req, res) => {
  res.send("Hello - Node with ES6- successfully");
});
app.listen(5000, (err) => {
  console.log(`Server Running on Port: ${5000}`);
});
