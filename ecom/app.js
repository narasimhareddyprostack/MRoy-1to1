import express from "express";
//es6
var app = express();
//static path setting
app.use(express.static(__dirname + "/public"));
app.set("views", "./src/view");

app.set("view engine", "ejs");
var message = 'BookMyShow';
app.get("/", (req, res) => {
  res.render("index",{ message });
});
app.listen(8000, (err) => {
  console.log(`Server Running on Port: ${8000}`);
});
