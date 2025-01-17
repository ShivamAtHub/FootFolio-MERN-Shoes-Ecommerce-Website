const express = require("express");
const Checkout = require("../models/Checkout");

const router = express.Router();

// POST route to handle checkout data
router.post("/", async (req, res) => {
    try {
        const { address, cardNumber, expiryDate, cvv } = req.body;

        // Create a new Checkout document
        const newCheckout = new Checkout({
            address,
            cardNumber,
            expiryDate,
            cvv,
        });

        // Save to the database
        await newCheckout.save();

        res.status(201).json({ message: "Checkout data saved successfully." });
    } catch (err) {
        res.status(500).json({ error: "Failed to save checkout data", message: err.message });
    }
});

module.exports = router;
