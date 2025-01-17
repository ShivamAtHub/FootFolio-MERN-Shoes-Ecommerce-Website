// backend/models/Casual.js
const mongoose = require("mongoose");

const casualSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    imageSrc: { type: String, required: true },
    description: { type: String, required: true },
    sizes: { type: [String], required: true },
});

const Casual = mongoose.model("Casual", casualSchema);

module.exports = Casual;
