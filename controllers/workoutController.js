const express = require('express');
const router = express.Router();
const {Workout} = require("../models");

router.get("/", async (req, res)=> {
    try {
        const allWorkouts = await Workout.findAll();
        res.status(200).json(allWorkouts);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "An error has occurred!"});
    }
})


module.exports = router;