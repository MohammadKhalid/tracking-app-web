const { validationResult } = require('express-validator/check');
const personalNotesModel = require('./personalNotes.model')

module.exports = {
    saveNotes: async (req, res) => {
        try {
            let { notes } = req.body
            let userId = notes[0].userId
            let isExist = await personalNotesModel.count({
                where: {
                    userId: userId
                }
            })
            let StringNotes = JSON.stringify(notes)
            console.log(StringNotes)
            if (isExist == 0) {
                var notesRes = personalNotesModel.create({
                    userId: userId,
                    notes: StringNotes
                })
            }else{
                var notesRes = personalNotesModel.update(
                    {
                        notes: StringNotes
                    },{
                        where:{
                            userId: userId
                        }
                    })
            }
            return res.json({
                code: 200,
                data: notesRes,
                message: 'Created.'
            });
        } catch (error) {
            return res.json({
                code: 500,
                data: '',
                message: 'API failed.'
            });
        }
    },

    getNotes: async (req, res) => {
        try {
            let { userId } = req.params
            let notes = await personalNotesModel.findAll({
                where: {
                    userId: userId
                }
            })
            return res.json({
                code: 200,
                data: notes.pop(),
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

}