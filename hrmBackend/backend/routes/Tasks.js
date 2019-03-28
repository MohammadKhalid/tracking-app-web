const users = require('../Models/Admin')
const schedule = require('../Models/schedule')
const express = require('express');
const router = express.Router();
const joi = require('joi');
const auth = require('../auth/authentication')

router.post('/assignTask', async (req, res) => {
    try {

        const schema = {
            title: joi.string().required(),
            description: joi.required(),
            assignTo: joi.required(),
            date: joi.required(),
            adminId: joi.required(),
        }

        const { error } = joi.validate(req.body, schema);
        if (error) return res.send({ 'message': 'Failed', 'err': error.details[0].message, 'code': 500 });

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


router.get('/userTasks/:id/:status',auth, async (req, res) => {
    try {
        let userTasks = await schedule.findAll({
            where: {
                Assignto: req.params.id,
                Status: req.params.status
            }
        })

        if (userTasks.length > 0) {
            res.send({
                'message': 'success',
                'err': userTasks,
                "code": 200
            })
        } else {
            res.send({
                'message': 'No task found',
                'err': userTasks,
                "code": 200
            })
        }
    } catch (error) {
        res.send({
            'message': 'api failed',
            'err': err,
            "code": 500
        })
    }
})


router.get('/markComplete/:userid/:taskid',auth, async (req, res) => {
    try {
        let userTasks = await schedule.update({
            Status: 'Completed'
        },
        {
            where: {
                Id: req.params.taskid,
                assignTo: req.params.userid
            }
        })
        res.send({
            'message': 'Task Updated',
            'err': userTasks,
            "code": 200
        })
    } catch (error) {
        res.send({
            'message': 'Failed to update',
            'err': err,
            "code": 500
        })
    }
})

module.exports = router;