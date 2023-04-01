const express = require('express')
const bodyParser = require('body-parser')
require('dotenv').config()
const colors = require('colors')
const app = express()
const port = process.env.port || 8000
require('./dataBase/conn')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import Router file
var notesRoute = require("./routes/notesRoute");

// All rountes
app.use("/notes", notesRoute);

app.listen(port,()=>{
    console.log(`server is running on : ${port}`.yellow.bold)
})