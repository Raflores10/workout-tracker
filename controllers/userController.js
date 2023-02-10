const express = require('express');
const router = express.Router();
const {User} = require("../models");

router.get("/", async (req, res)=> {
    try {
        const allUsers = await User.findAll();
        res.status(200).json(allUsers);
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "An error has occurred!"});
    }
})

module.exports = router;