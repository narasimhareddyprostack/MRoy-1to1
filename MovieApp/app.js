import express from "express";
import chalk from "chalk";
import morgan from 'morgan'
const app = express();
const path = require('path')

app.use(morgan('tiny'))
app.use(express.static(__dirname+'/public'));
app.set('views', 'view');
app.set('view engine', 'ejs');
app.get("/", (req, res) => {
  res.render('index',{ message:'Movie Application'})
});
app.listen(7000, (err) => {
  console.log(`${chalk.red(`Server Running onabort...7000`)}`)
});
