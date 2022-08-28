
// Requiring module
const mongoose = require('mongoose');


// Cars
const carsSchema = new mongoose.Schema({
	name: String,
    model: Number,
    price:Number,
    speed:String,
    date:Date
});

// Creating model objects
const Cars = mongoose.model('Cars', carsSchema);

// Exporting our model objects
// module.exports = {
// 	Art, Cars, Music, Programming, Sports
// }
module.exports = Cars;
