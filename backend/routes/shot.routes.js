const { getShots, createShot } = require("../controllers/shorts.controller");
const { auth } = require("../middleware/auth");

const shotsRoutes = require("express").Router();

shotsRoutes.get("/" , getShots);

shotsRoutes.post("/",auth , createShot);


module.exports = shotsRoutes;