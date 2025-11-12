const mongoose = require('mongoose');

const shortsSchema = new mongoose.Schema({
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

const Shorts = mongoose.model("Shorts", shortsSchema);

module.exports = Shorts;