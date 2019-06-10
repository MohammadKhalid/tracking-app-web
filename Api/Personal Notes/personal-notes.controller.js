const { validationResult } = require('express-validator/check');
const personalNotesModel = require('./personal-notes.model')

module.exports = {
    saveNotes: async (req,res)=>{
        try {
            let {title,description,userId} = req.body
            let notes = await personalNotesModel.create({
                title: title,
                userId: userId,
                description: description
            })
            return res.json({
                code: 200,
                data: notes,
                message: 'API failed.'
            });
        } catch (error) {
            return res.json({
                code: 500,
                data: '',
                message: 'API failed.'
            });
        }
    },

    getNotes: async (req,res) =>{
        try {
            let {userId} = req.params
            let notes = await personalNotesModel.findAll({
                where:{
                    userId: userId
                }
            })
            return res.json({
                code: 200,
                data: notes,
                message: 'task'
            });
        } catch (error) {
            return res.json({
                code: 500,
                data: '',
                message: 'API failed.'
            });
        }
    },

    getNoteById: async (req,res) =>{
        try {
            let {taskId} = req.params
            let notes = await personalNotesModel.findAll({
                where:{
                    id: taskId
                }
            })
            return res.json({
                code: 200,
                data: notes,
                message: 'task'
            });
        } catch (error) {
            return res.json({
                code: 500,
                data: '',
                message: 'API failed.'
            });
        }
    },

    deleteNote: async (req, res) =>{
        try {
            let {taskId} = req.params
            let notes = await personalNotesModel.destroy({
                where:{
                    id: taskId
                }
            })
            return res.json({
                code: 200,
                data: notes,
                message: 'task'
            });
        } catch (error) {
            return res.json({
                code: 500,
                data: '',
                message: 'API failed.'
            });
        }
    },

    editNotes: async (req,res) =>{
        try {
            let {taskId} = req.params
            let {title,description,userId} = req.body
            let notes = await personalNotesModel.update(
                {
                   title: title,
                   description: description 
                },{
                where:{
                    id: taskId
                }
            })
            return res.json({
                code: 200,
                data: notes,
                message: 'task'
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