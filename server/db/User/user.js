const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: Number,
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
