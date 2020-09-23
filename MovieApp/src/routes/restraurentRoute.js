import express from "express";
const restraurentRouter = express.Router();

restraurentRouter.route("/").get((req, res) => {
  res.render("restraurents", { message: "Restraurent-Home", menu });
});

restraurentRouter.route("/details").get((req, res) => {
  res.render("restraurent-details", { message: "Restraurents-Details", menu });
});

module.exports = restraurentRouter;
