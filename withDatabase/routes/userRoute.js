const express = require("express");
const user = require("./../controller/user");

const router = express.Router();

router
  .route("/")
  .get(user.getAllUsers)
  .post(user.createUser);

router.route("/:id").get(user.getUser);

module.exports = router;
