const express = require("express")
const app = express()
const mongoose = require("mongoose")
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./Routes/api')
const Base64 = require('./Functions/base64')
const key = require('./Routes/key')

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/soccarDB' ,  { useNewUrlParser: true })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'distEnter')))
app.use('/', api)
app.use(`/admin/${Base64.encode(key)}`, express.static(path.join(__dirname, 'Admin')));
app.use(`/main`, express.static(path.join(__dirname, 'Dist')));


// The Server is Listning
const port = process.env.PORT || 3000
app.listen(port , function(){
    console.log('The Server is up and running on ' + port)
})