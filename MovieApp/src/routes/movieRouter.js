import express from "express";
import "babel-polyfill";

import mongodb from "mongodb";
const mongo = mongodb.MongoClient;

const url = "mongodb://localhost:27017";
//const urlc =
("mongodb+srv://prostack:movie123@cluster0.e4or2.mongodb.net/MovieDB?retryWrites=true&w=majority");
// () 
// ( () { }  () )
const movieRouter = express.Router();

const menu = [
  { link: "/", name: "Home" },
  { link: "/movies", name: "Movies ALL" },
  { link: "/restraurents", name: "Restra All" },
  { link: "contact-us", name: "Contact US" },
];
const database_name = "MovieDB";

movieRouter.route("/").get((req, res) => {
  console.log("<<<<");
  (async function mongo() {
    let mongoClient;
    try {
      console.log("<<<<");
      mongoClient = await mongodb.connect(url);
      const db = await mongoClient.db(database_name);
      const col = await db.collection("MovieData");
      const data = await col.find({}).toArray();
      res.render("movies", {
        message: "Movie Application",
        menu: menu,
        moviesApi: data,
      });
    } catch (err) {
      throw err;
    }
  })();
});

movieRouter.route("/details").get((req, res) => {
  res.render("movie-details", {
    message: "Movie Details",
    menu: menu,
    moviesApi: moviesApi,
  });
});

module.exports = movieRouter;
