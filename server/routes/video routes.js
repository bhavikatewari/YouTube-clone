//list all the url addresses to videos 



const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploadMiddleware");
const {
  getAllVideos,
  getVideoById,
  uploadVideo,
} = require("../controllers/videoController");

// GET all videos
router.get("/", getAllVideos);

// GET one video by id
router.get("/:id", getVideoById);

// POST (upload) a new video
router.post("/", uploadVideo);

module.exports = router;
