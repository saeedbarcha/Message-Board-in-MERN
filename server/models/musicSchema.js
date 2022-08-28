
// Requiring module
const mongoose = require('mongoose');

// Music
const musicSchema = new mongoose.Schema({
	name:String,
    type: String,
    instruments: String,
	length: String,
    date: Date
});

// Creating model objects
const Music = mongoose.model('Music', musicSchema);

// Exporting our model objects
// module.exports = {
// 	Art, Cars, Music, Programming, Sports
// }
module.exports = Music;
