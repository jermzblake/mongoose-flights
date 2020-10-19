const Flight = require('../models/flight');

module.exports = {
    create

}

function create(req, res, next){
    //not sorting arrival in ascending order for some reason
    Flight.findById(req.params.id).sort({arrival: "asc"}).exec(function(err, flight){
        flight.destinations.push(req.body);
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`);
        })
    })
}