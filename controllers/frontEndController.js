const express = require('express');
const router = express.Router();

router.get('/login', (req, res)=> {
    res.render("login");
})

router.get('/signup', (req, res)=> {
    res.render("signup");
})

router.get('/homepage', (req, res)=> {
    res.render("homepage");
})

module.exports = router;