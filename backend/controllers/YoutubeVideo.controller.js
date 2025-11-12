const YtVideos = require("../models/YtVideo");

const getYtVideos = async (req, res) => {
    try {
        const shots = await YtVideos.find();
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

const createYtVideos = async (req, res) => {
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
        
        const shot = new YtVideos({ 
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

const deleteYtVideo = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await YtVideos.findByIdAndDelete(id);

        if (!deleted) {
            return res.status(404).json({ message: 'YouTube video not found' });
        }

        res.json({ message: 'YouTube video deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getYtVideos, createYtVideos, deleteYtVideo };