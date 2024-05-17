const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
    name: { type: String, require: true },
    pic: String,
    cuisines: { type: String, require: true },
    city: { type: String, default: 'Anytown' },
    state: { type: String, default: 'USA' },
    founded: Number,
})

module.exports = mongoose.model('Place', placeSchema)


