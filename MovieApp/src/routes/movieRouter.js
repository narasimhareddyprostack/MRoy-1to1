import express from 'express'

import mongodb from 'mongodb';
const mongo = mongodb.MongoClient;

//const url = 'mongodb://localhost:27017';
const urlc = 'mongodb+srv://prostack:movie123@cluster0.e4or2.mongodb.net/MovieDB?retryWrites=true&w=majority'

const movieRouter = express.Router();


const menu = [
    { link: "/", name: "Home" },
    { link: "/movies", name: "Movies ALL" },
    { link: "/restraurents", name: "Restra All" },
    { link: "contact-us", name: "Contact US" },
  ];

movieRouter.route("/").get((req, res) => {
    mongo.connect(urlc, (err,db)=>{
      if(err) throw err
      const manasidb = db.db('MovieDB')
      manasidb.collection('MovieData')
              .find({})
              .toArray((err,data)=>{
                res.render("movies", {
                  message: "Movie Application",
                  menu: menu,
                  moviesApi: data,
                });


              });

    });
  });
  movieRouter.route("/details").get((req, res) => {
    res.render("movie-details", {
      message: "Movie Details",
      menu: menu,
      moviesApi: moviesApi,
    });
  });

module.exports = movieRouter;