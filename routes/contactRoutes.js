const express = require("express");
const Contact = require("../models/Contact"); // Import the Contact model

const router = express.Router();

// Route to handle contact form submissions
router.post("/contact", async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message } = req.body;

        // Validate required fields
        if (!firstName || !lastName || !email || !phone || !message) {
            return res.status(400).json({ error: "All fields are required." });
        }

        // Create a new Contact document
        const newContact = new Contact({
            firstName,
            lastName,
            email,
            phone,
            message
        });

        // Save the new contact form data to the database
        await newContact.save();

        res.status(201).json({ message: "Contact form submitted successfully!" });
    } catch (error) {
        console.error("Error submitting contact form:", error);
        res.status(500).json({ error: "An error occurred while submitting the form." });
    }
});

module.exports = router;
