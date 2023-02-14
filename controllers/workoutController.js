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

router.get("/:id", async (req, res)=> {
    try {
        const allUserWorkouts = await Workout.findAll({
            where: {
                user_id: req.params.id
            }
        });
        res.status(200).json(allUserWorkouts);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "An error has occurred!"});
    }
})

router.post("/", async (req, res)=> {
    try {
        const newWorkout = await Workout.create({
            bench_max: req.body.bench_max,
            deadlift_max: req.body.deadlift_max,
            squat_max: req.body.squat_max,
            user_id: req.session.userID
        });
    
        if(newWorkout){
            res.status(200).json(newWorkout);
        } else {
            res.status(404).jason({msg: "An error occurred!"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "An error occurred!"});
    }
});


module.exports = router;