const express = require('express');
const router = express.Router();

const userRoutes = require('./userController');
router.use('/api/users', userRoutes);

const workoutRoutes = require('./workoutController');
router.use('/api/workouts', workoutRoutes);

const frontEndRoutes = require("./frontEndController");
router.use('/', frontEndRoutes);

module.exports = router;