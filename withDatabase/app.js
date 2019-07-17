const express = require("express");

const app = express();
const port = 3000;

app.route("/").get((req, res) => res.send("You server is on"));

app.listen(port, () => {
  console.log(`Listening to the port: http://localhost:${port}`);
});
