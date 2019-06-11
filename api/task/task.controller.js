const userModel = require('../user/user.model')
const trackingModel = require('../tracking/tracking.model')
const taskModel = require('./task.model')
const { validationResult } = require('express-validator/check');
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
    assignTask: async (req, res) => {
        let { userId, title, description, date } = req.body

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({ code: 500, data: '', message: errors.array() });
        }

        try {
            let userTask = await taskModel.create({
                userId: userId,
                title: title,
                description: description,
                date: date,
                completed: 0
            })

            if (userTask) {
                res.send({
                    'message': 'success',
                    'data': userTask,
                    "code": 200
                })
            } else {

                res.send({
                    'message': 'Failed to insert task.',
                    'data': userTask,
                    "code": 500
                })
            }
        } catch (error) {
            res.send({
                'message': 'API failed.',
                'data': error,
                "code": 500
            })
        }
    },

    viewEmployeeTask: async (req, res) => {
        try {
            let { employeeId, dateFrom, dateTo } = req.params
            let userTask = await taskModel.findAll({
                include: [{
                    model: userModel,
                    attributes: ['firstName','lastName']
                }],
                order:[
                    ['id','DESC']
                ],
                where: {
                    date: {
                        [Op.between]: [dateFrom, dateTo]
                    },
                    userId: employeeId
                }
            })
            res.send({
                'message': 'success',
                'data': userTask,
                "code": 200
            })

        } catch (error) {
            res.send({
                'message': 'API failed',
                "code": 500
            })
        }
    },

    userTasks: async (req, res) => {
        try {
            let { employeeId, date } = req.params
            let userTasks = await taskModel.findAll({
                where: {
                    userId: employeeId,
                    date: date
                }
            })

            res.send({
                'message': 'success',
                'data': userTasks,
                "code": 200
            })

        } catch (error) {
            res.send({
                'message': 'API failed',
                'err': err,
                "code": 500
            })
        }
    },

    markComplete: async (req,res)=>{
        let {userId,latitude,longitude,date} = req.body
        let {taskId}= req.params
        try {
            let userTasks = await taskModel.update({
                completed: 1
            },
            {
                where: {
                    Id: taskId,
                    userId: userId
                }
            })
            let userTaskTracking = trackingModel.create({
                userId: userId,
                date: date,
                latitude: latitude,
                longitude: longitude,
                taskId: taskId,
            })
            res.send({
                'message': 'Task Updated',
                'data': userTasks,
                "code": 200
            })
        } catch (error) {
            res.send({
                'message': 'Failed to update',
                'data': error,
                "code": 500
            })
        } 
    },
    
    getTaskById: async (req,res) =>{
        try {
            let {taskId} = req.params
            let task = await taskModel.findOne({
                where: {
                    Id: taskId 
                }
            })

            res.send({
                'message': 'API failed',
                'data': task,
                "code": 200
            })
        } catch (error) {
            res.send({
                'message': 'API failed',
                'data': error,
                "code": 500
            })
        }
    },

    editTask: async (req,res) =>{
        try {
            let { title, description, date } = req.body
            let {taskId} = req.params

            let task = await taskModel.update({
                title: title,
                description: description,
                date: date
            },{
                where: {
                    Id: taskId
                }
            })
            res.send({
                'message': 'Task updated.',
                'data': task,
                "code": 200
            })
        } catch (error) {
            res.send({
                'message': 'API failed',
                'data': error,
                "code": 500
            })
        }
    },

    deleteTask: async (req,res) =>{
        try {
            let {taskId} = req.params

            let task = await taskModel.destroy({
                where:{
                    Id: taskId
                }
            })
            res.send({
                'message': 'Task updated.',
                'data': task,
                "code": 200
            })
        } catch (error) {
            res.send({
                'message': 'API failed',
                'data': error,
                "code": 500
            })
        }
    }
}