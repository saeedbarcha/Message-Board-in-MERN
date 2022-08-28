
// Requiring module
const mongoose = require('mongoose');

// Sports
const sportsSchema = new mongoose.Schema({
	name: String,
    country: String,
    numOfPlayers: String,
	playIn: String,
    date: Date
})

// Creating model objects
const Sports = mongoose.model('Sports', sportsSchema);

// Exporting our model objects
module.exports = Sports;
