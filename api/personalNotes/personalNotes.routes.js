var express = require('express');
var router = express.Router();
var personalNotesController = require('./personalNotes.controller')
const { check } = require('express-validator/check');

router.post('/saveNotes',personalNotesController.saveNotes)

router.get('/getNotes/:userId',personalNotesController.getNotes)


module.exports = router;