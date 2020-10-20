const Flight = require('../models/flight');

module.exports = {
    create,
    delete: deleteOne
}

function create(req, res, next){
    Flight.findById(req.params.id, function(err, flight){
        flight.destinations.push(req.body);
        flight.save(function(err){
            res.redirect(`/flights/${flight._id}`);
        })
    })
}

function deleteOne(req, res, next){
    Flight.find({'destinations._id': req.params.id}, function(err, flights) {
        // const destDoc = flights.destinations.id(req.params.id).remove();
        console.log(flights[0].destinations.id(req.params.id)); 
        flights[0].destinations.id(req.params.id).remove()
        flights[0].save(function(err){
        res.render(`flights/index`);
    });
})
}