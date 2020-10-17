const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,


}

function index(req, res, next) {
    Flight.find({}, function(err, flights){
    res.render('flights/index', {flights});
  });
}

function newFlight(req, res, next) {
    res.render('flights/new', )
}

function create(req, res, next){
    //remove empty properties
    for (let key in req.body){
        if (req.body[key] === '') delete req.body[key];
    }
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if(err){
            // alert("There was an error in your form"); <-- why is alert undefined here?
            return res.render('flights/new')
        }
        console.log(flight)
        res.redirect('flights/');
    });
}