const express = require("express");
const Sport = require("../models/Sports");
const router = express.Router();

// Route to add multiple sports products in bulk
router.post("/bulk", async (req, res) => {
    try {
        const products = req.body; // Array of products to be inserted

        // Validate if the input is an array
        if (!Array.isArray(products) || products.length === 0) {
            return res.status(400).json({ error: "Invalid product data" });
        }

        // Insert multiple products into the database
        const savedProducts = await Sport.insertMany(products);
        res.status(201).json(savedProducts);
    } catch (err) {
        res.status(500).json({ error: "Failed to add products", message: err.message });
    }
});

// Route to get all sports products
router.get("/", async (req, res) => {
    try {
        const products = await Sport.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch products", message: err.message });
    }
});

// Route to get a single sports product by ID
router.get("/:id", async (req, res) => {
    try {
        const product = await Sport.findById(req.params.id); // MongoDB auto-generated _id lookup
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch product", message: err.message });
    }
});

module.exports = router;
