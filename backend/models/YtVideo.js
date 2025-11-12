const mongoose = require('mongoose');

const YtVideosSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  youtubeUrl: {
    type: String,
    required: true,
    trim: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const YtVideos = mongoose.model("YtVideo", YtVideosSchema);

module.exports = YtVideos;