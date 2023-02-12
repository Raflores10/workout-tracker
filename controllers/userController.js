const express = require('express');
const router = express.Router();
const {User, Workout} = require("../models");
const bcrypt = require("bcrypt");

router.get("/", async (req, res)=> {
    try {
        const allUsers = await User.findAll();
        res.status(200).json(allUsers);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "An error has occurred!"});
    }
})

router.get("/:id", (req,res)=>{
    User.findByPk(req.params.id,{
     include:[Workout]
    }).then(userData=>{
     res.json(userData)
    }).catch(err=>{
     console.log(err);
     res.status(500).json({msg:"An error has occurred",err})
    })
 })


router.post("/", async (req, res)=> {
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

router.post("/login", async (req, res)=> {
    try {
        const findUser = await User.findOne({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        });
    
        if (findUser){
            return res.status(200).json(findUser);
        } else {
            return res.status(401).json({msg: "Incorrect email or password!"});
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "An error has occurred."});
    }
})

module.exports = router;