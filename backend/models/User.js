const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  contact: String,
  dob: String,
  discription: String,
});

const User = mongoose.model("user", userSchema);

module.exports = User;
