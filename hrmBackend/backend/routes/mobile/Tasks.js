const users = require('../../Models/Admin')
const schedule = require('../../Models/schedule')
const express = require('express');
const router = express.Router();
const joi = require('joi');
const auth = require('../../auth/authentication')


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