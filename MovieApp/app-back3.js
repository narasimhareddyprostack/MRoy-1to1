import express from "express";
import chalk from "chalk";
import morgan from "morgan";
const app = express();
const path = require("path");

import mongodb from "mongodb";
const mongo = mongodb.MongoClient;

const urlc = 'mongodb://localhost:27017';
//const urlc =
  "mongodb+srv://prostack:movie123@cluster0.e4or2.mongodb.net/MovieDB?retryWrites=true&w=majority";
import movieRouter from "./src/routes/movieRouter";
import restraurentRouter from "./src/routes/restraurentRoute";

//const movieRouter = express.Router();
const RestraurentRouter = express.Router();

app.use(morgan("tiny"));
app.use(express.static(__dirname + "/public"));
app.set("views", "./src/view");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  mongo.connect(urlc, (err, db) => {
    if (err) throw err;
    const manasidb = db.db("MovieDB");
    manasidb
      .collection("menu")
      .find({})
      .toArray((err, data) => {
        res.render("index", { message: "Movie Application", menu: data });
      });
  });
});

app.use("/movies", movieRouter);
app.use("/restraurents", RestraurentRouter);
app.listen(7000, (err) => {
  console.log(`${chalk.red(`Server Running onabort...7000`)}`);
});
