const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const cors = require("cors");

const port = process.env.PORT | 9000;

const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

const monogURL = "mongodb://127.0.0.1:27017/";
let db;
let col_name = "dbusers";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
//app.options("*", cors()); //

app.get("/", (req, res) => {
  console.log("inside root requrest");
  db.collection(col_name)
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      //res.render('index', {})
      res.send(result);
    });
});
//localhost:9000/addUser
app.post("/addUser", (req, res) => {
  console.log("inside AddUser");
  console.log(req.body);
  const data1 = {
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
  };
  db.collection(col_name).insert(data1, (err, result) => {
    if (err) throw err;
    else {
      res.send(result);
    }
  });
});
// localhost:9000/addUser
MongoClient.connect(monogURL, (err, client) => {
  if (err) console.log(err);
  db = client.db("dashboard");
  app.listen(port, (err) => {
    console.log(`Server is running on port.. ${port}`);
  });
});
