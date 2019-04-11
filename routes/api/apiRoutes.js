const router = require("express").Router();
const favsController = require("../../controllers/controller.js");

router.route("/new_user")
    .post(favsController.addUser);

router.route("/add_url")
    .post(favsController.addFavUrl);

router.route("/get_user")
    .get(favsController.findUser);

router.route("/:user/favorites")
    .get(favsController.findUrls);

router.route("/:user/delete")
    .delete(favsController.remove);
    
module.exports = router;