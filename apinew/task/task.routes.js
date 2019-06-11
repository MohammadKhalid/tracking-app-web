const express = require('express');
const router = express.Router();
const taskController = require('./task.controller')
const { check } = require('express-validator/check');

router.post('/assignTask',[
        check('title').not().isEmpty(),
        check('description').not().isEmpty(),
        check('date').not().isEmpty()
    ],taskController.assignTask)

router.get('/viewEmployeeTask/:dateFrom/:dateTo/:employeeId',taskController.viewEmployeeTask)
router.get('/userTasks/:employeeId/:date',taskController.userTasks)
router.get('/getTaskById/:taskId',taskController.getTaskById)

router.put('/markComplete/:taskId',taskController.markComplete)
router.put('/editTask/:taskId',taskController.editTask)

router.delete('/deleteTask/:taskId',taskController.deleteTask)
module.exports = router;