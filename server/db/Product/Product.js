const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  model: String,
  price: Number,
  category: String,
  company: String,
});

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;
