const express = require('express');
const user = require('../Models/Admin');
const router = express.Router();
const bcrypt = require('bcryptjs');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const userRole = require('../Models/userRole')
const Roles = require('../Models/roles')

router.post('/login', async (req, res) => {

    const schema = {
        email: joi.string().required().email(),
        password: joi.required()

    }
    const { error } = joi.validate(req.body, schema);
    if (error) return res.send({ 'message': 'Failed', 'err': error.details[0].message,'code': 500 });

    try {
        let User = await user.findAll({ 
            attributes:['Firstname','Lastname',['Id','user_id'],'Email','Password'],
            include:[{
                attributes:[['Role_name','Role'],['Id','Role_id']],
                model: Roles,
                where: {
                    Role_name: 'admin'
                }
            }],
            raw: true, 
            // limit: 1, 
            where: { 
                Email: req.body.email 
            } 
        });
        if (User.length <= 0) return res.send({ 'message': 'failed', err: 'Invalid email or password','code': 500 });
        User = User.pop();
        const isPassword = await bcrypt.compare(req.body.password, User.Password);
        if (!isPassword) return res.send({ 'message': 'faied', 'err': 'invalid email or password','code':500 })
        const token = jwt.sign({ User }, 'jwtPrivateKey');

        res.send({
            'message': 'successfully login',
            'token': token,
            'code': 200
        })
    } catch (err) {
        res.send({
            'message': 'failed',
            'err': err,
            'code': 500
        })


    }


})


module.exports = router;