require("dotenv").config();
const express = require("express");
const db = require("./models");

//const routes = require("./routes");
const controller = require("./controllers/controller.js");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();
//random comment 

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("listening on port " + PORT);
    })
})