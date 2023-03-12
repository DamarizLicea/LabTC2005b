const express = require("express");
const path = require("path");

const router = express.Router();

const pagController = require("../controllers/pag.controller");

router.get("/home/:id", pagController.get_home);

router.get("/home", pagController.get_home);

router.get("/agregar", pagController.get_agregar);

router.post("/agregar", pagController.post_agregar);

router.get("/gifs", pagController.get_rick);

module.exports = router;
