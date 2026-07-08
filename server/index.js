//this file will start the backend server 

// Import tools
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connectDB = require("./config/db");

// Import routes
const videoRoutes = require("./routes/videoRoutes");
const userRoutes = require("./routes/userRoutes");

// Create the server
const app = express();

// Connect to MongoDB
connectDB();

// Allow frontend to talk to backend + understand JSON
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// Use our routes
app.use("/api/videos", videoRoutes);
app.use("/api/users", userRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
