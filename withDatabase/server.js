const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(res => console.log("connected to mongo"));

app.route("/").get((req, res) => {
  res.send("Hello World");
});
app.route("/admin").get((req, res) => {
  res.send("You are not an admin");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Connected To : ", `http://localhost:${port}`);
});
