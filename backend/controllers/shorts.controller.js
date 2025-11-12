const Shorts = require("../models/shots");

const getShots = async (req, res) => {
    try {
        const shots = await Shorts.find();
        res.json(shots);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const extractYouTubeVideoId = (url) => {
    const shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/);
    if (shortsMatch) {
        return shortsMatch[1];
    }
    
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

const getYouTubeThumbnail = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

const createShot = async (req, res) => {
    try {
        const { title, youtubeUrl } = req.body;
        
        if (!title || !youtubeUrl) {
            return res.status(400).json({ message: 'Title and YouTube URL are required' });
        }
        
        const videoId = extractYouTubeVideoId(youtubeUrl);
        if (!videoId) {
            return res.status(400).json({ message: 'Invalid YouTube URL' });
        }
        
        const thumbnail = getYouTubeThumbnail(videoId);
        
        const shot = new Shorts({ 
            title, 
            youtubeUrl,
            thumbnail 
        });
        await shot.save();
        res.json(shot);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getShots, createShot };