const express = require('express');
const router = express.Router();
const attendanceController = require('./attendance.controller')
const { check } = require('express-validator/check');

router.post('/markAttendance',attendanceController.markAttendance)

router.get('/getAttendanceByDate/:userid/:date',attendanceController.getAttendanceByDate)

module.exports = router;