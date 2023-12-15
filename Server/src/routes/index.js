const express = require("express")
const getCharById = require("../controllers/getCharById");
const postUser = require("../controllers/postUser");
const login = require("../controllers/login")
const postFav = require("../controllers/postFav")
const deleteFav = require("../controllers/deleteFav")
const Router = express.Router();

Router.get("/character/:id",getCharById)
Router.get("/login", login)
Router.post("/login", postUser)
Router.post("/fav", postFav);
Router.delete("/fav/:id", deleteFav)

module.exports = Router;