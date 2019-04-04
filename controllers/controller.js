const db = require("../models");

module.exports = {
    addUser: function(name, email, password){
        let newUser = {
            name: name,
            email: email,
            password: password
        }
        db.User.create(newUser)
    },
    findUser: function(email){
        // query all favorite items for a user
        db.User.findAll({
            where: {
                email: email
            }
        })
        .then(data => {
            console.log(data);
            return data;
        })
    },
    findItem: function(userId){
        // find all videos, images, or audio files
        db.Favorites.findAll({
            where: {
                UserId: userId
            }
        }).then(data => {
            console.log(data);
            return data;
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
                videoUrl: favUrl
            }
        }).then(data => {
            console.log(data);
        })
    }
};