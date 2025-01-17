const mongoose = require("mongoose");

const skateboardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: String, required: true },
    imageSrc: { type: String, required: true },
    description: { type: String, required: true },
    sizes: { type: [String], required: true },
});

const Skateboard = mongoose.model("Skateboard", skateboardSchema);

module.exports = Skateboard;
