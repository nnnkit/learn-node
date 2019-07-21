const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User must have a name"]
  },
  username: {
    type: String,
    unique: true,
    required: [true, "User must have a username"]
  },
  batch: Number
});

const User = mongoose.model("user", userSchema);

module.exports = User;
