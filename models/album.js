const mongoose = require('mongoose');
const albumSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    artist: String,
    year: Number
})

module.exports = mongoose.model('Album', albumSchema)