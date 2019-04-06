const db = require("../models");

module.exports = {
    addUser: function(req, res){
        let newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        db.User.create(newUser)
    },
    findUser: function(req, res){
        // query all favorite items for a user
        db.User.findAll({
            where: {
                email: req.body.email
            }
        })
        .then(data => {
            console.log(data);
            res.json(data);
            return data;
        })
    },
    findItem: function(req, res){
        // find all videos, images, or audio files
        db.Favorites.findAll({
            where: {
                UserId: req.params.user
            }
        }).then(data => {
            console.log(data);
            res.json(data);
            return data;
        })
    },
    addFav: function(req, res){
        // add a new favorite item to the favorites database
        var newFav = {
            UserId: req.body.userId,
            videoUrl: req.body.favUrl
        };

        db.Favorites.create(newFav).then(data => {
            console.log(data);
            res.json(data);
        })
    },
    remove: function(req, res){
        // remove a favorite item 
        db.Favorites.destroy({
            where: {
                userId: req.params.user,
                videoUrl: req.body.favUrl
            }
        }).then(data => {
            console.log(data);
        })
    }
};