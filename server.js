require("dotenv").config();
const express = require("express");
const db = require("./models");

const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(routes);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("listening on port " + PORT);
    })
})