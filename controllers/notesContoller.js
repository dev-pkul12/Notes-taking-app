const notesModel = require("../models/notesModel");
require("dotenv").config();

// @desc   Get all Notes
// @route  GET /notes
// @access Public
const getNotes = async (req, res) => {
    try {
        const allNotes = await notesModel.find()
        return res.status(200).json(allNotes)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
};

// @desc   Add new Notes
// @route  POST /notes
// @access Public
const addNotes = async (req, res) => {
    const { title, text } = req.body;
    try {
        const NotesData = await notesModel.create(req.body)
        res.status(200).json(NotesData)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
};

// @desc   Delete Notes
// @route  DELETE /notes/:id
// @access Public
const deleteNotes = async (req, res) => {
    const _id = req.params.id
    try {
        const deleteNotes = await notesModel.findByIdAndDelete(_id)
        res.status(200).send(deleteNotes)
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
};

module.exports = {
    getNotes,
    addNotes,
    deleteNotes
};
