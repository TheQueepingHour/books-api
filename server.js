require('dotenv').config()

const express = require('express')
const app = express()

//MIDDLEWARE
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.listen(process.env.PORT)