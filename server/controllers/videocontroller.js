//contains the logic for fetching/adding/deleting videos 

const Video = require("../models/Video");

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

// Upload a new video
const uploadVideo = async (req, res) => {
  try {
    const newVideo = new Video(req.body);
    const savedVideo = await newVideo.save();
    res.status(201).json(savedVideo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllVideos, getVideoById, uploadVideo };
