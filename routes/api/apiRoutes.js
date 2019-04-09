const router = require("express").Router();
const favsController = require("../../controllers/controller.js");

router.route("/new_user")
    .post(favsController.addUser);

router.route("/new_video")
    .post(favsController.addFavVideo);

router.route("/new_audio")
    .post(favsController.addFavAudio);

router.route("/new_image")
    .post(favsController.addFavImage);

router.route("/get_user")
    .get(favsController.findUser);

router.route("/:user/favorites")
    .get(favsController.findItem);

router.route("/:user/videos")
    .get(favsController.findVideos);

router.route("/:user/audio")
    .get(favsController.findAudio);

router.route("/:user/images")
    .get(favsController.findImages);

router.route("/:user/delete")
    .delete(favsController.remove);
    
module.exports = router;