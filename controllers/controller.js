const db = require("../models");

module.exports = {
    findAllUrls: function(email){
        // query all favorite items for a user
        db.User.findAll({
            where: {
                email: email
            }
        })
        .then(data => {
            return data;
        })
    },
    findItem: function(userId){
        // find all videos, images, or audio files
        db.Favorites.findAll({
            where: {
                UserId: userId
            }
        })
    },
    addFav: function(userId, favUrl){
        // add a new favorite item to the favorites database
        var newFav = {
            UserId: userId,
            videoUrl: favUrl
        };

        db.Favorites.create(newFav).then(data => {
            console.log(data);
        })
    },
    remove: function(userId, favUrl){
        // remove a favorite item 
        db.Favorites.destroy({
            where: {
                UserId: userId,
                VideoUrl: favUrl
            }
        }).then(data => {
            console.log("Item removed from user: " + data.UserId);
        })
    }
};