const Flight = require('../models/flight');

module.exports = {
    create

}

function create(req, res, next){
    Flight.findById(req.params.id, function(err, flight){
        flight.destinations.push(req.body);
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`);
        })
    })
}