const express = require('express');
const router = express.Router();
const { Workout } = require("../models");

router.get('/login', (req, res)=> {
    res.render("login");
})

router.get('/signup', (req, res)=> {
    res.render("signup");
})

router.get('/homepage', (req, res)=> {
    res.render("homepage");
})

router.get('/record', (req, res)=> {
    Workout.findAll({
        where: {
            user_id: 1
        }
    }).then(workoutData=>{
        const hbsWorkouts = workoutData.map(workout=>workout.toJSON())
        res.render("record", {
            allWorkouts: hbsWorkouts
        });
    })

})

module.exports = router;