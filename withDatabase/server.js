const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoute = require("./routes/userRoute");
const app = express();
app.use(express.json());

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
  })
  .then(res => console.log("connected to mongo"));

app.use("/api/v1/users", userRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Connected To : ", `http://localhost:${port}`);
});
