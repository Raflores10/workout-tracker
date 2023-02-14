const express = require('express');
const router = express.Router();
const { User, Workout } = require("../models");

router.get('/login', (req, res)=> {
    res.render("login");
})

router.post("/login", async (req, res)=> {
    try {
        const findUser = await User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        });
        if (findUser){
            req.session.userID = findUser.id;
            req.session.username = findUser.username;
            return res.status(200).json(findUser);
        } else {
            return res.status(401).json({msg: "Incorrect email or password!"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "An error has occurred."});
    }
})

router.get('/logout', (req, res)=> {
    req.session.destroy();
    res.send("Logged out!");
})

router.get('/signup', (req, res)=> {
    res.render("signup");
})

router.post("/signup", async (req, res)=> {
    try{
        const newUser = await User.create({
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        if (newUser){
            req.session.userID = newUser.id;
            req.session.username = newUser.username;
            res.json(newUser)
        } else {
            res.status(404).json({msg: "Something went wrong!"});
        }
    } catch (error){
        console.log(error);
        res.status(500).json({msg: "An error has occurred!"});
    }
})

router.get('/homepage', (req, res)=> {
    res.render("homepage");
})
router.get('/squats', (req, res)=> {
    res.render("squats");
})
router.get('/deadlift', (req, res)=> {
    res.render("deadlift");
})
router.get('/benchpress', (req, res)=> {
    res.render("benchpress");
})

router.get('/record', (req, res)=> {
    Workout.findAll({
        where: {
            user_id: req.session.userID
        },
        order: [
            ["id", "DESC"]
        ]
    }).then(workoutData=>{
        const bench = [];
        const deadlift = [];
        const squat = [];
        const hbsWorkouts = workoutData.map(workout=>workout.toJSON())
        for (let workout of hbsWorkouts){
            bench.push(workout.bench_max);
            deadlift.push(workout.deadlift_max);
            squat.push(workout.squat_max);
        }

        const filteredBench = bench.filter((max, index)=> {
            return index === bench.indexOf(max);
        })

        const filteredDeadlift = deadlift.filter((max, index)=> {
            return index === deadlift.indexOf(max);
        })

        const filteredSquat = squat.filter((max, index)=> {
            return index === squat.indexOf(max);
        })

        res.render("record", {
            benchMaxes: filteredBench,
            deadliftMaxes: filteredDeadlift,
            squatMaxes: filteredSquat,
            username: req.session.username
        });
    }).catch(error => {
        console.log(error);
    })

})


module.exports = router;