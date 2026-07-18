//this file will start the backend server 


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // ye add kiya



// Import routes
const videoRoutes = require("./routes/videoRoutes");
const userRoutes = require("./routes/userRoutes");

// Create the server
const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const connectDB = async () => {  // <-- function banaya
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("MongoDB connection failed:", error);
    process.exit(1);
  }
}; 

connectDB(); // function ko call kiya

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

app.use("/api/users", userRoutes);

// TEMP ROUTE - user banane ke liye
app.get('/seed-user', async (req, res) => {
  try {
    const User = require('./models/user.model').default
    const bcrypt = require('bcrypt')
    
    const hash = await bcrypt.hash('123456', 10)
    await User.create({
      fullName: 'Bhavika',
      email: 'test@test.com', 
      username: 'bhavika',
      password: hash
    })
    res.send('User ban gaya! Ab is route ko hata do')
  } catch(e) {
    res.send('Error: ' + e.message)
  }
})

// Start server
const PORT = process.env.PORT || 5000;

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
}); // <-- ye bracket band kiya
