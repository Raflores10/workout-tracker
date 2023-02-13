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
            user_id: req.session.userID
        }
    }).then(workoutData=>{
        const hbsWorkouts = workoutData.map(workout=>workout.toJSON())
        res.render("record", {
            allWorkouts: hbsWorkouts
        });
    }).catch(error => {
        console.log(error);
    })

})

router.get('/logout', (req, res)=> {
    req.session.destroy();
    res.send("Logged out!");
})

module.exports = router;