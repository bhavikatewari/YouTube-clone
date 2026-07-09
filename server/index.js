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

//const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB connection failed:", error);
    process.exit(1);
  }
}; Connect to MongoDB
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
