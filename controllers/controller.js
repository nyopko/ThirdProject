const db = require("../models");

module.exports = {
    addUser: function(req, res){
        let newUser = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        db.User.findAll({       //check to see if the user already exists
            where: {
                email: newUser.email
            }
        }).then(data => {
            if(!data[0]){
                db.User.create(newUser)     //if the user does not exist, add it to the database
                    .then(data => {
                        console.log(data);
                        res.json(data);
                    })
            }
            else{
                console.log("User Already Exists")      //otherwise, send a "user exists" response
                res.json({status: 'User Already Exists'})
            }
        })
        
    },
    findUser: function(req, res){
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
    findVideos: function(req, res){
        db.Favorites.findAll({
            attributes: [videoUrl],
            where: {
                UserId: req.params.user
            }
        }).then(data => {
            console.log(data);
            res.json(data);
            return data;
        })
    },
    findAudio: function(req, res){
        db.Favorites.findAll({
            attributes: [audioUrl],
            where: {
                UserId: req.params.user
            }
        }).then(data => {
            console.log(data);
            res.json(data);
            return data;
        })
    },
    findImages: function(req, res){
        db.Favorites.findAll({
            attributes: [imageUrl],
            where: {
                UserId: req.params.user
            }
        })
    },
    addFavVideo: function(req, res){
        let newFav = {
            UserId: req.body.userId,
            videoUrl: req.body.favUrl
        };

        db.Favorites.create(newFav).then(data => {
            console.log(data);
            res.json(data);
        })
    },
    addFavAudio: function(req, res){
        let newFav = {
            UserId: req.body.userId,
            videoUrl: req.body.favUrl
        }

        db.Favorites.create(newFav).then(data => {
            console.log(data);
            res.json(data);
        })
    },
    addFavImage: function(req, res){
        let newFav = {
            UserId: req.body.userId,
            imageUrl: req.body.favUrl
        }

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