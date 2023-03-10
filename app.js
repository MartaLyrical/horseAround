const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('./db/connect')
const routes = require('./routes')
const errorHandler = require('./middleware/errorHandler')

dotenv.config()

const port = process.env.port || 8080
const app = express()

app
    .use(bodyParser.json())
    .use(cors())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Headers', '*')
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE, OPTIONS')
        next()
    })
    .use(routes)
    .use(errorHandler)

mongoose.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port)
        console.log(`Connected to db and listening on port ${port}`)
    }
})