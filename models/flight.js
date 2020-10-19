const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
  airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']},
  arrival: {type: Date}
})

const flightSchema = new Schema({
    airline: {type: String, enum: ['American', 'Southwest', 'United']},
    airport: {type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN'},
    flightNo: {type: Number, min: 10, max: 9999, },
    departs: {type: Date, default: function() {
        let aYearFromNow = new Date();
        return aYearFromNow.setFullYear(aYearFromNow.getFullYear() + 1);}
      },
      // destinations is an array of destination subdocs
    destinations: [destinationSchema], //embedding destinations
})

//compiling the model and exportin it
module.exports = mongoose.model('Flight', flightSchema);