const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  imageSrc: { type: String, required: true },
  description: { type: String, required: true },
  colors: { type: [String], required: true },
  sizes: { type: [String], required: true },
  highlights: { type: [String], required: true },
  category: { type: String, required: true }, // e.g., 'Casual', 'Sports', etc.
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
