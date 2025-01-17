const mongoose = require("mongoose");

const sportSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    imageSrc: { type: String, required: true },
    description: { type: String, required: true },
    sizes: { type: [String], required: true },
});

const Sport = mongoose.model("Sport", sportSchema);

module.exports = Sport;
