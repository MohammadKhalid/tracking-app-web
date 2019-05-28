var adminModel = require('./admin.model')
const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
module.exports = {

    login: async (req, res) => {
        let {email,password} = req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ code: 500, data: '', message: errors.array() });
        }
        try {
            let admin = await adminModel.findOne({
                where:{
                    email: email
                }
            })
            if(!admin) return res.json({ code: 500, data: '', message: 'Invalid email or password.' });

            const isPassword = await bcrypt.compare(password, admin.password);
            if(!isPassword) return res.json({ code: 500, data: '', message: 'Invalid email or password.' });

            const token = jwt.sign({ admin }, 'jwtPrivateKey');

            return res.json({
                code: 200,
                message: 'Login successful',
                token: token,
                data: ''
            })
            
        } catch (error) {
            return res.json({ code: 500, data: '', message: 'Api Failed' });
        }
    },


    register: async (req, res) => {
        let {email,password,phone,firstname,lastname,address} = req.body
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ code: 500, data: '', message: errors.array() });
        }

        try {
            let checkAdmin = await adminModel.count({
                where:{
                    email: email
                }
            })

            if(checkAdmin > 0) return res.json({ code: 500, data: 'User already exist.', message: '' });

            let passHash = await bcrypt.hash(password, 10)
            let admin = await adminModel.create({
                email: email,
                password: passHash,
                firstName: firstname,
                lastName: lastname,
                phone: phone,
                address: address,
                isActive: 1
            })
            const token = jwt.sign({ admin }, 'jwtPrivateKey', {
                expiresIn : '24h'
            });
            if(admin){
                return res.json({code: 200, token: token, message: ''})
            }else{
                return res.json({ code: 500, data: '', message: 'enable to register.' });    
            }
        } catch (error) {
            return res.json({ code: 500, data: '', message: 'Api Failed' });
        }
    }
}