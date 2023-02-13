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
router.get('/squats', (req, res)=> {
    res.render("squats");
})
router.get('/deadlift', (req, res)=> {
    res.render("deadlift");
})
router.get('/benchpress', (req, res)=> {
    res.render("benchpress");
})

module.exports = router;