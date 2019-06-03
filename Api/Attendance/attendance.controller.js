const attendanceModel = require('./attendance.model')
const trackingModel = require('../Tracking/tracking.model')
const sequelize = require('sequelize')
const Op = sequelize.Op
const moment = require('moment')

module.exports = {
    markAttendance: async (req, res) => {
        try {
            let { latitude, longitude, type, date, time, userId } = req.body
            let attendenceResult = null;
            let attendanceCount = await attendanceModel.count({
                where: {
                    date: date,
                    userId: userId
                }
            })

            if (attendanceCount >= 1 && type == "CheckedIn")
                return res.send({
                    'message': 'Attendance already marked.',
                    'data': '',
                    'code': 500
                })

            if (attendanceCount == 1 && type == 'CheckedOut') {
                attendenceUpdate = await attendanceModel.update({
                    checkOutTime: time,
                    isPresent: 1
                }, {
                        where: {
                            date: date,
                            userId: userId
                        }
                    })

                attendenceResult = await attendanceModel.findOne({
                    where: {
                        date: date,
                        userId: userId
                    }
                })
            } else {
                attendenceResult = await attendanceModel.create({
                    userId: userId,
                    date: date,
                    checkInTime: time,
                })
            }

            let trackingResult = await trackingModel.create({
                userId: userId,
                latitude: latitude,
                longitude: longitude,
                date: date,
            })
            // io.emit('track_User', {data: [trackingResult]});
            res.send({
                'message': 'Attendance Marked',
                'data': attendenceResult,
                'code': 200
            })
        } catch (error) {
            res.send({
                'message': 'API failed',
                'data': error,
                'code': 500
            })
        }
    },

    getAttendanceByDate: async (req, res) => {
        let { userId, date } = req.params
        try {
            let tempDate = moment(date, "YYYY-MM-DD").subtract((10), 'day').format("YYYY-MM-DD")
            let attendenceResult = await attendanceModel.findAll({
                where:{
                    date: {
                        [Op.between]: [tempDate,date]
                    },
                    userId: userId
                }
            })

            res.send({
                'message': 'success',
                'data': attendenceResult,
                'code': 200
            })
        } catch (error) {
            res.send({
                'message': 'Attendance API failed',
                'data': error,
                'code': 500
            })
        }
    },

    getAttendance: async (req, res) => {
        let { userId, fromDate,toDate } = req.params
        try {
            let attendenceResult = await attendanceModel.findAll({
                where:{
                    date: {
                        [Op.between]: [fromDate,toDate]
                    },
                    userId: userId
                }
            })

            res.send({
                'message': 'success',
                'data': attendenceResult,
                'code': 200
            })
        } catch (error) {
            res.send({
                'message': 'Attendance API failed',
                'data': error,
                'code': 500
            })
        }
    },


}