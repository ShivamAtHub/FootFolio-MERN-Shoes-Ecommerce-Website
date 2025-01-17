// backend/routes/casualRoutes.js
const express = require("express");
const Casual = require("../models/Casual");

const router = express.Router();

// Route to add bulk Casual products
router.post("/bulk", async (req, res) => {
    try {
        const products = req.body; // Array of products to be inserted

        // Ensure that products array is provided
        if (!Array.isArray(products) || products.length === 0) {
            return res.status(400).json({ error: "No products to insert" });
        }

        // Insert all products for the 'Casual' category
        const savedProducts = await Casual.insertMany(products);

        // Respond with the inserted products
        res.status(201).json(savedProducts);
    } catch (err) {
        res.status(500).json({ error: "Failed to add products", message: err.message });
    }
});

// Route to get all Casual products
router.get("/", async (req, res) => {
    try {
        const products = await Casual.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch products", message: err.message });
    }
});

// Route to get a single Casual product by ID
router.get("/:id", async (req, res) => {
    try {
        const product = await Casual.findById(req.params.id);
        if (!product) return res.status(404).json({ error: "Product not found" });
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch product", message: err.message });
    }
});

module.exports = router;
