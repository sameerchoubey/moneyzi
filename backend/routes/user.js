const express = require('express');
// const db = require('../../db');

const router = express.Router();

router.post('/signup', function (req, res, next) {
    const {username, firstName, lastName, password} = req;

    //first check if username exists in DB or not

    let body = {
        username,
        firstName,
        lastName,
        password
    }

    res.send({body})
})

router.get('/test', function (req, res, next) {
    const {username, firstName, lastName, password} = req;

    //first check if username exists in DB or not

    let body = {
        username,
        firstName,
        lastName,
        password
    }

    res.send({'hello': 'hello'})
})

router.post('/signin', function (req, res, next) {
    const {username, firstName, lastName, password} = req;
    let body = {
        
    }
})

module.exports = router;