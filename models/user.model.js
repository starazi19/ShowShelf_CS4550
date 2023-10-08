const mongoose = require("mongoose");

const User = mongoose.model(
  "user",
  new mongoose.Schema({
    username: String,
    password: String,
    role: String,
  })
);

module.exports = User;