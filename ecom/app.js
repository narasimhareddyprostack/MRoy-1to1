import express from "express";
//es6
var app = express();
app.get("/", (req, res) => {
  res.send("<h1>Ecom Project</h1>");
});
app.listen(8000, (err) => {
  console.log(`Server Running on Port: ${8000}`);
});
