const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({
    address: { type: String, required: true },
    cardNumber: { type: String, required: true },
    expiryDate: { type: String, required: true },
    cvv: { type: String, required: true },
});

const Checkout = mongoose.model("Checkout", checkoutSchema);

module.exports = Checkout;
