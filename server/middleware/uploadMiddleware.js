
const multer = require("multer");

// Temporarily store the file in memory before sending to Cloudinary
const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = upload;
