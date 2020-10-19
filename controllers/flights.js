const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show,

}

function index(req, res, next) {
    Flight.find({}).sort({departs: "asc"}).exec(function(err, flights){
    res.render('flights/index', {flights});
  });
}

function newFlight(req, res, next) {
    const newFlight = new Flight();
// Obtain the default date
    const dt = newFlight.departs;
// Format the date for the value attribute of the input
    const departsDate = dt.toISOString().slice(0, 16);
    res.render('flights/new', {departsDate});
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
        res.redirect('flights/'); //details links don't work from here??
    });
}

function show(req, res, next){
    Flight.findById(req.params.id, function(err, flight){
        res.render('flights/show', {flight})
    })
}