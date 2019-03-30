const router = require("express").Router();
const favsController = require("../../controllers/controller.js");

router.route("/:user/favorites")
    .get(favsController.findAll);

