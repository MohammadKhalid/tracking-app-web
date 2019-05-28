var express = require('express');
var router = express.Router();
var userController = require('./user.controller')
const { check } = require('express-validator/check');


router.post('/login',[
        check('email').isEmail(),
        check('email').not().isEmpty(),
        check('password').not().isEmpty()
    ],userController.login)


router.post('/create',[
        check('email').isEmail(),
        check('email').not().isEmpty(),
        check('password').not().isEmpty(),
        check('phone').not().isEmpty(),
        check('firstname').not().isEmpty(),
        check('lastname').not().isEmpty(),
    ],userController.create)

module.exports = router;