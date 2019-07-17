const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
const port = 4000;

// routes

function getTours() {
  return (req, res) => {
    const d = JSON.parse(fs.readFileSync(`${__dirname}/data/data.json`));
    res.status(200).json({ success: true, data: d });
  };
}
const getTour = (req, res) => {
  const id = +req.params.id;
  const d = JSON.parse(fs.readFileSync(`${__dirname}/data/data.json`));
  if (id > d.length) {
    return res.status(404).send({ success: false, message: "Invalid Id" });
  }
  const tour = d.find(tour => tour.id === id);
  res.status(200).json({ success: true, data: tour });
};
const mainRoute = (req, res) => {
  res.send("Hello");
};

const getMainRoute = (req, res) => {
  res
    .status(200)
    .json({ message: "Hello Main Route", app: "http://localhost:4000" });
};
app
  .route("/")
  .get(getMainRoute)
  .post(mainRoute);
app.route("/api/v1/tours").get(getTours);
app.route("/api/v1/tour/:id").get(getTour);

console.log(process.env)
app.listen(port, () => {
  console.log(`Listening to the port: http://localhost:${port}`);
});
