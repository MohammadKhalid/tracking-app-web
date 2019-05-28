var express = require('express');
var router = express.Router();
var adminController = require('./admin.controller')
const { check } = require('express-validator/check');


router.post('/login',[
        check('email').isEmail(),
        check('email').not().isEmpty(),
        check('password').not().isEmpty()
    ],adminController.login)


router.post('/register',[
        check('email').isEmail(),
        check('email').not().isEmpty(),
        check('password').not().isEmpty(),
        check('phone').not().isEmpty(),
        check('firstname').not().isEmpty(),
        check('lastname').not().isEmpty(),
        check('address').not().isEmpty()
    ],adminController.register)

module.exports = router;