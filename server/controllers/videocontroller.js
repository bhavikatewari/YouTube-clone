//contains the logic for fetching/adding/deleting videos 


const Video = require("../models/Video");
const cloudinary = require("../config/cloudinary");

// Get all videos
const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get one video by id
const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.json(video);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Upload a new video (with real file)
const uploadVideo = async (req, res) => {
  try {
    const { title, description } = req.body;

    // Convert file into a format Cloudinary understands, then upload it
    const fileBase64 = req.file.buffer.toString("base64");
    const fileUri = `data:${req.file.mimetype};base64,${fileBase64}`;

    const uploadResult = await cloudinary.uploader.upload(fileUri, {
      resource_type: "video",
      folder: "youtube-clone",
    });

    const newVideo = new Video({
      title,
      description,
      videoUrl: uploadResult.secure_url,
      thumbnailUrl: uploadResult.secure_url.replace(".mp4", ".jpg"),
    });

    const savedVideo = await newVideo.save();
    res.status(201).json(savedVideo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllVideos, getVideoById, uploadVideo };
