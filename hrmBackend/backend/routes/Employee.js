const express = require('express');
const users = require('../Models/Admin');
const roles = require('../Models/roles');
const userRole = require('../Models/userRole');
const router = express.Router();
const bcrypt = require('bcryptjs');
const joi = require('joi');
const jwt = require('jsonwebtoken');
const auth = require('../auth/authentication')

router.post('/addEmployee', async (req, res) => {

    const schema = {
        email: joi.string().required().email(),
        password: joi.required(),
        firstname: joi.required(),
        lastname: joi.required(),
        cnic: joi.required(),
        phone: joi.required(),
        address: joi.required(),
        role: joi.required(),
        adminId : joi.required()

    }
    const { error } = joi.validate(req.body, schema);
    if (error) return res.send({ 'message': 'Failed', 'err': error.details[0].message,'code': 500 });
    try {
        let User = await users.findAll({ raw: true, limit: 1, where: { Email: req.body.email } });
        if (User.length > 0) return res.send({ 'message': 'failed', err: 'Email already exist','code': 500 });
        const passwordHash = await bcrypt.hash(req.body.password, 10);
        const user = await users.create({
            Firstname: req.body.firstname,
            Lastname: req.body.lastname,
            Email: req.body.email,
            Password: passwordHash,
            CNIC: req.body.cnic,
            Phone: req.body.phone,
            Address: req.body.address,
            IsActive: "1",
            Created_by: req.body.adminId,
            Updated_by: req.body.adminId
        })

        if (!user) return res.send({ 'message': 'Failed', 'err': "error inserting Employee",'code': 500 });

        const userrole = await userRole.create({
            tblUserId: user.Id,
            tblRoleId: req.body.role,
            isActive: 1,
            created_by: 1,
            updated_by: 1
        })
        res.send({
            'message': 'Employee Inserted',
            'code': 200
        })

    } catch (err) {
        res.send({
            'message': 'failed',
            'err': err,
            "code": 500
        })
    }

})


router.get('/viewAllEmployee',auth, async (req,res)=>{
    try{
        let User = await users.findAll({ 
            raw: true,
            include: [{
                model: roles,
                where:{
                    Role_name: 'employee'
                }
            }]
        });
        res.send({
            'message': 'success',
            'data': User,
            "code": 200            
        })
    } catch (err) {
        res.send({
            'message': 'failed',
            'err': err,
            "code": 500
        })
    }
})


router.post('/login', async (req, res) => {

    const schema = {
        email: joi.string().required().email(),
        password: joi.required()

    }
    
    const { error } = joi.validate(req.body, schema);
    if (error) return res.send({ 'message': 'Failed', 'err': error.details[0].message,'code': 500 });

    try {
        let User = await users.findAll({ 
            attributes:['Firstname','Lastname',['Id','user_id'],'Email','Password'],
            include:[{
                attributes:[['Role_name','Role'],['Id','Role_id']],
                model: roles,
                where: {
                    Role_name: 'employee'
                }
            }],
            raw: true, 
            // limit: 1, 
            where: { Email: req.body.email } 
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