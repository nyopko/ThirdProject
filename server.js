require("dotenv").config();
const express = require("express");
const db = require("./models");
//const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
        console.log("listening on port " + PORT);
    })
})