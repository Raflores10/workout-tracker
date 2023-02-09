require("dotenv").config();
const express = require('express');

const sequelize = require('./config/connection');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

//const {Team,Player,User} = require("./models");
//TODO: need to updates above values
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
// app.use(express.static('public'));

const allRoutes = require("./controllers");

app.use(allRoutes);


sequelize.sync({force:false}).then(function() {
    app.listen(PORT, function() {
        console.log('App listening on PORT ' + PORT);
    });
});