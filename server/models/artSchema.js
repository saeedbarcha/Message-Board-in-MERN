
// Requiring module
const mongoose = require('mongoose');

// Art Schema
const artSchema = new mongoose.Schema({
	name: String,
    artistName: String,
	type:String,
	price:Number,
    date: Date
});


// Creating model objects
const Art = mongoose.model('Art', artSchema);

// Exporting our model objects
// module.exports = {
// 	Art, Cars, Music, Programming, Sports
// }
module.exports = Art;
