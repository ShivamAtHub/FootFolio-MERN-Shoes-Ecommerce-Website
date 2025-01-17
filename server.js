const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

// Import Routes
const authRoutes = require("./routes/authRoutes");
const casualRoutes = require("./routes/casualRoutes");
const sportsRoutes = require("./routes/sportsRoutes");
const skateboardingRoutes = require("./routes/skateRoutes");
const designerRoutes = require('./routes/designerRoutes');
const contactRoutes = require("./routes/contactRoutes");  
const checkoutRoutes = require("./routes/checkoutRoutes");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
    .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/products/casual", casualRoutes);
app.use("/api/products/sports", sportsRoutes);
app.use("/api/products/skateboarding", skateboardingRoutes);
app.use("/api/products/designer", designerRoutes);
app.use("/api", contactRoutes); 
app.use("/api/checkout", checkoutRoutes);

// Server React Frontend
const frontendPath = path.resolve(__dirname, "frontend", "build");
app.use(express.static(frontendPath));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(frontendPath, "index.html"));
});

// Server Listener
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
