var express = require('express');
var router = express.Router();
var personalNotesController = require('./personalNotes.controller')
const { check } = require('express-validator/check');

router.post('/saveNotes',personalNotesController.saveNotes)

router.get('/getNotes/:userId',personalNotesController.getNotes)
router.get('/getNoteById/:taskId',personalNotesController.getNoteById)

router.delete('/deleteNote/:taskId',personalNotesController.deleteNote)

router.put('/editNotes/:taskId',personalNotesController.editNotes)

module.exports = router;