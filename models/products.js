var mongoose = require("mongoose");
var ProductSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    location: { type: String },
    price: { type: Number },
  },
  { autoCreate: true }
);
var Product = mongoose.model('products',ProductSchema);

exports = module.exports = Product;