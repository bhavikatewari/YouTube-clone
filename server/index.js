//this file will start the backend server 

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // .env file load karne ke liye

const app = express();
const PORT = process.env.PORT || 5000;

// Import Routes
const videoRoutes = require("./routes/videoRoutes");
const userRoutes = require("./routes/userRoutes");

// Middleware
app.use(cors()); // Frontend ko permission
app.use(express.json()); // JSON samajhne ke liye

// DB Connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

connectDB(); // DB ko call karna jaruri hai

// Test Route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Use Routes
app.use("/api/videos", videoRoutes);
app.use("/api/users", userRoutes);

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
