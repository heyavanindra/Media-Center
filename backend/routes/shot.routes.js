const { getShots, createShot, deleteShot } = require("../controllers/shorts.controller");
const { auth } = require("../middleware/auth");

const shotsRoutes = require("express").Router();

shotsRoutes.get("/" , getShots);

shotsRoutes.post("/",auth , createShot);
shotsRoutes.delete("/:id", auth, deleteShot);


module.exports = shotsRoutes;