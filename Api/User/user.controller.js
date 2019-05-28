var userModel = require('./user.model')
const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


module.exports = {
    login: (req, res) => {

    },

    create: async (req, res) => {
        let { email, password, phone, firstname, lastname, image, adminId } = req.body
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.json({ code: 500, data: '', message: error.array() });
        }

        try {
            let checkUser = await userModel.findone({ where: { Email: req.body.email } });
            return res.json({
                code: 500,
                data: checkUser,
                message: 'API failed.'
            });
        } catch (error) {
            return res.json({
                code: 500,
                data: '',
                message: 'API failed.'
            });
        }
    }
}