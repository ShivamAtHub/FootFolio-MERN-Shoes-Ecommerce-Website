const mongoose = require("mongoose");

const designerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  imageSrc: { type: String, required: true },
  description: { type: String, required: true },
  sizes: { type: [String], required: true }, 
});

const Designer = mongoose.model("Designer", designerSchema);

module.exports = Designer;
