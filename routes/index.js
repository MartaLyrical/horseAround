const express = require('express')

const router = express.Router()

// for testing only
router.get('/', (req, res) => {
    res.send('Home')
})

// routes goes here
router.use('/stables', require('./stables'))

module.exports = router