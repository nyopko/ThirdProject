const router = require("express").Router();
const favsController = require("../../controllers/controller.js");

router.route("/new_user")
    .post(favsController.addUser);

router.route("/new_fav")
    .post(favsController.addFav);

router.route("/get_user")
    .get(favsController.findUser);

router.route("/:user/favorites")
    .get(favsController.findItem);

router.route("/:user/delete")
    .delete(favsController.remove);
    
module.exports = router;