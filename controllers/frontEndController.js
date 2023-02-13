const express = require('express');
const router = express.Router();
const { User, Workout } = require("../models");
const sequelize = require('sequelize');

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

router.get('/record', (req, res)=> {
    Workout.findAll({
        // attributes: [
        //     [sequelize.fn('DISTINCT', Sequelize.col('bench_max')) ,'bench_max'],
        //     [sequelize.fn('DISTINCT', Sequelize.col('squat_max')) ,'squat_max'],
        //     [sequelize.fn('DISTINCT', Sequelize.col('deadlift_max')) ,'deadlift_max']
        // ],
        where: {
            user_id: req.session.userID
        }, 
        order: [
            ["id", "DESC"]
        ]
    }).then(workoutData=>{
        const hbsWorkouts = workoutData.map(workout=>workout.toJSON())
        res.render("record", {
            allWorkouts: hbsWorkouts,
            username: req.session.username
        });
    }).catch(error => {
        console.log(error);
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

})

module.exports = router;