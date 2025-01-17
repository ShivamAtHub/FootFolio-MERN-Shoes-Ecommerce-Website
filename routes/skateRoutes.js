const express = require("express");
const Skateboard = require("../models/Skateboard");

const router = express.Router();

// Route to add multiple skateboard products in bulk
router.post("/bulk", async (req, res) => {
    try {
        const products = req.body; // Array of products to be inserted

        // Validate the input to ensure it's an array
        if (!Array.isArray(products) || products.length === 0) {
            return res.status(400).json({ error: "No products to insert" });
        }

        // Insert all products into the database
        const savedProducts = await Skateboard.insertMany(products);

        // Respond with the inserted products
        res.status(201).json(savedProducts);
    } catch (err) {
        res.status(500).json({ error: "Failed to add products", message: err.message });
    }
});

// Route to get all Skateboard products
router.get("/", async (req, res) => {
    try {
        const products = await Skateboard.find();
        res.status(200).json(products); // Send all products
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch products", message: err.message });
    }
});

// Route to get a single skateboard product by ID
router.get("/:id", async (req, res) => {
    try {
        const product = await Skateboard.findById(req.params.id); // Using MongoDB's auto-generated _id
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(product); // Send the found product
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch product", message: err.message });
    }
});

module.exports = router;
