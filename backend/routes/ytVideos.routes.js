const { getYtVideos, createYtVideos, deleteYtVideo } = require("../controllers/YoutubeVideo.controller");
const { auth } = require("../middleware/auth");

const ytVideosRoute = require("express").Router();

ytVideosRoute.get("/" , getYtVideos);

ytVideosRoute.post("/",auth , createYtVideos);
ytVideosRoute.delete("/:id", auth, deleteYtVideo);


module.exports = ytVideosRoute;