var express = require('express');
var router = express.Router();
var userController = require('./user.controller')
const { check } = require('express-validator/check');


router.post('/login',[
        check('email').isEmail().withMessage('Invalid email.'),
        check('email').not().isEmpty().withMessage('Email should not be empty.'),
        check('password').not().isEmpty().withMessage('Password should not be empty.')
    ],userController.login)


router.post('/create',[
        check('email').isEmail().withMessage('Invalid email.'),
        check('email').not().isEmpty().withMessage('Email should not be empty.'),
        check('password').not().isEmpty().withMessage('Password should not be empty.'),
        check('phone').not().isEmpty().withMessage('Phone should not be empty.'),
        check('firstname').not().isEmpty().withMessage('First Name should not be empty.'),
        check('lastname').not().isEmpty().withMessage('Last Name should not be empty.'),
    ],userController.create)

router.get('/viewAllEmployee/:adminId',userController.viewAllEmployee);
router.put('/editEmployee/:employeeId',userController.editEmployee);

module.exports = router;