const express = require("express");
const app = express();

const dotEnv = require("dotEnv");
dotEnv.config({ path: "./config/config.env" });

const port = process.env.PORT || 5000;
const morgan = require("morgan");

const mongoose = require("mongoose");

app.use(morgan("tiny"));

app.get("/", (request, response) => {
  response.send("Node Server is Ready");
});
// accepts form data;
app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.use("/user", require("./router/userRouter"));
// app.use('/order', require('./router/orderRouter'));
// app.use('/product', require('./router/productRouter'))

app.listen(port, (err) => {
  if (err) throw err;
  console.log(`Server is Running:...  ${port}`);
});
//mongoose.connect(url).then().catch();
mongoose
  .connect(process.env.MONGODB_CLOUD_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then((response) => {
    console.log("Connected Mongodb Successfully.....");
  })
  .catch((err) => {
    console.log(err);
  });
