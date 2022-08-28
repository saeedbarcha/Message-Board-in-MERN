
// Requiring module
const mongoose = require('mongoose');



// Programming 
const programmingSchema = new mongoose.Schema({
	language: String,
    applications: String,
	category: String,
    level: String,
    duration:String
});


// Creating model objects
const Programming = mongoose.model('Programming', programmingSchema);

// Exporting our model objects
// module.exports = {
// 	Art, Cars, Music, Programming, Sports
// }

module.exports = Programming;
