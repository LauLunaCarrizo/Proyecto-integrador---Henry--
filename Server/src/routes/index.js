const express = require("express");
const getCharById = require("../controllers/getCharById");
const Login = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const Router = express.Router();

Router.get("/character/:id",getCharById)
Router.get("/login",Login)
Router.post("/fav",postFav)
Router.delete("/fav/:id",deleteFav)

module.exports = Router;