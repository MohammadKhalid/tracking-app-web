const users = require('../../Models/Admin')
const schedule = require('../../Models/schedule')
const express = require('express');
const router = express.Router();
const joi = require('joi');
const auth = require('../../auth/authentication')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

router.post('/assignTask', auth,async (req, res) => {
    try {

        const schema = {
            title: joi.string().required(),
            description: joi.required(),
            assignTo: joi.required(),
            date: joi.required(),
            adminId: joi.required(),
        }

        const { error } = joi.validate(req.body, schema);
        if (error) return res.send({ 'message': error.details[0].message, 'code': 500 });

        try {
            let userSchedule = await schedule.create({
                Assignto: req.body.assignTo,
                title: req.body.title,
                description: req.body.description,
                Status: "Incomplete",
                date: req.body.date,
                updated_by: req.body.adminId,
                created_by: req.body.adminId,
                isActive: 1,
                createdAt: req.body.date,
                updatedAt: req.body.date
            })

            res.send({
                'message': 'success',
                'data': userSchedule,
                "code": 200
            })
        } catch (error) {
            res.send({
                'message': 'failed in inserting',
                'err': err,
                "code": 500
            })
        }
    } catch (err) {
        res.send({
            'message': 'api failed',
            'err': err,
            "code": 500
        })
    }
})


router.get('/viewEmployeeTask/:dateFrom/:dateTo/:employeeId/:status',async (req,res)=>{
    try {
        let {employeeId, dateFrom,dateTo,status} = req.params
        let userSchedule = await schedule.findAll({
            attributes: ['title','description','Status','date',['Id','Task_id']],
            include: [{
                attributes: ['Firstname','Lastname',['Id','user_id']],
                model: users
            }],
            where: {
                Assignto: employeeId,
                date: {
                    [Op.between]: [dateFrom,dateTo]
                },
            },
            raw: true
        })
        if(userSchedule.length >0 ){
            res.send({
                'message': 'success',
                'data': userSchedule,
                "code": 200
            })
        }else{
            res.send({
                'message': 'No task Found for this user',
                "code": 200
            })
        }
    } catch (error) {
        res.send({
            'message': 'Failed to fetch task',
            "code": 500
        })
    }
})

module.exports = router;