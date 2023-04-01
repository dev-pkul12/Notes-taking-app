const express = require('express');
const notesController = require('../controllers/notesContoller');
const notesRoute = express.Router();

// geting all notes
notesRoute.get("/", notesController.getNotes);

// creating new notes
notesRoute.post("/", notesController.addNotes);

// deleting the notes
notesRoute.delete("/:id", notesController.deleteNotes);

module.exports = notesRoute