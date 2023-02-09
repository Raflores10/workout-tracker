const express = require('express');
const allRoutes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 3000;

const { User, Workout} = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(allRoutes);

app.listen(PORT, function() {
    console.log(`SERVER RUNNING - Listening on Port: ${PORT}`);
});