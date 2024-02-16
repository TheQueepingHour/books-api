require('dotenv').config()
//DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')

const app = express()

const controller = require('./controllers/controller.js')
//MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

app.use('/books', controller)

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.listen(process.env.PORT)