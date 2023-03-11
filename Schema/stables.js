const mongoose = require('mongoose')

const stablesSchema = new mongoose.Schema({
    // stables schema goes here
})

module.exports = mongoose.model('stables', stablesSchema, 'stables')