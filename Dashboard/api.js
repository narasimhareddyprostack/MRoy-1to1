const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT | 9000;

const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;

const monogURL = "mongodb://127.0.0.1:27017/";
let db;
let col_name = "dbusers";
app.use(cors());
app.options("*", cors()); //
app.get("/", (req, res) => {
  db.collection(col_name)
    .find({})
    .toArray((err, result) => {
      if (err) throw err;
      res.send(result);
    });
});
app.post('/addUser', (req,res)=>{

     =req.body
    res.send(result);

})
MongoClient.connect(monogURL, (err, client) => {
  if (err) console.log(err);
  db = client.db("dashboard");
  app.listen(port, (err) => {
    console.log(`Server is running on port.. ${port}`);
  });
});
