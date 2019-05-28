var userModel = require('./user.model')
const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


module.exports = {
    login: async (req, res) => {
        let { email, password } = req.body
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.json({ code: 500, data: '', message: error.array() });
        }

        try {
            let user = await userModel.findOne({
                where: {
                    email: email
                }
            })

            if (!user) {
                return res.json({
                    code: 500,
                    data: '',
                    message: 'Invalid email or password.'
                });
            }

            const isPassword = await bcrypt.compare(password, user.password);
            if (!isPassword) {
                return res.json({
                    code: 500,
                    data: '',
                    message: 'Invalid email or password.'
                });
            }

            const token = jwt.sign({ user }, 'jwtPrivateKey');
            return res.json({
                code: 200,
                data: '',
                token: token,
                message: 'Login succesful.'
            });
        } catch (error) {
            return res.json({
                code: 500,
                data: '',
                message: 'API failed.'
            });
        }
    },

    create: async (req, res) => {
        let { email, password, phone, firstname, lastname, image, adminId } = req.body
        const error = validationResult(req)
        if (!error.isEmpty()) {
            return res.json({ code: 500, data: '', message: error.array() });
        }

        try {
            let checkUser = await userModel.findOne({ where: { email: email } });

            if (checkUser) {
                return res.json({
                    code: 500,
                    data: '',
                    message: 'User already exists.'
                });
            }
            const passwordHash = await bcrypt.hash(password, 10);

            const user = await userModel.create({
                adminId: adminId,
                email: email,
                password: passwordHash,
                phone: phone,
                firstName: firstname,
                lastName: lastname,
                image: image,
                isActive: 1
            })
            if (!user) {
                return res.json({
                    code: 500,
                    data: '',
                    message: 'Unable to add employee.'
                });
            }
            return res.json({
                code: 200,
                data: '',
                message: 'Employee created.'
            });
        } catch (error) {
            return res.json({
                code: 500,
                data: '',
                message: 'API failed.'
            });
        }
    },

    viewAllEmployee: async (req, res) => {
        try {
            let { adminId } = req.params

            let users = await userModel.findAll({
                where: {
                    adminId: adminId
                }
            })
            return res.json({
                code: 200,
                data: users,
                message: ''
            });
        } catch (error) {
            return res.json({
                code: 500,
                data: '',
                message: 'API failed.'
            });
        }
    },

    editEmployee: async (req, res) => {
        try {
            const { adminId, firstname, lastname, email,phone } = req.body;
            const {employeeId} = req.params;
            let updated = await users.update({
                firstName: firstname,
                lastName: lastname,
                email: email,
                phone: phone,
            }, {
                    where: {
                        Id: employeeId,
                    }
                }
            )

            res.send({
                'message': 'updated successfully',
                'data': updated,
                "code": '200'
            })

        } catch (error) {
            res.send({
                'message': 'API failed',
                'data': error,
                "code": '500'
            })

        }
    }
}