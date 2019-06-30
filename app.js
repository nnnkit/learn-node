const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
const port = 4000;

// routes
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hello Main Route", app: "http://localhost:4000" });
});
app.get("/api/v1/tours", (req, res) => {
  const d = JSON.parse(fs.readFileSync(`${__dirname}/data/data.json`));
  res.status(200).json({ success: true, data: d });
});
app.get("/api/v1/tours/:id", (req, res) => {
  const id = +req.params.id;
  const d = JSON.parse(fs.readFileSync(`${__dirname}/data/data.json`));
  if (id > d.length) {
    return res.status(404).send({ success: false, message: "Invalid Id" });
  }
  const tour = d.find(tour => tour.id === id);
  res.status(200).json({ success: true, data: tour });
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening to the port: http://localhost:${port}`);
});
