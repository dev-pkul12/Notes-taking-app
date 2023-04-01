const mongoose = require('mongoose')

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
},{
    versionKey: false
})

const notes = new mongoose.model("notes", notesSchema);

module.exports = notes;