const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,


}

function index(req, res, next) {
    res.render('flights/index');
  };

function newFlight(req, res, next) {
    res.render('flights/new', )
}

function create(req, res, next){
    const flight = new Flight(req.body);
    flight.save(function(err){
        if(err){
            alert("There was an error in your form");
            return res.render('flights/new')
        }
        console.log(flight)
        res.redirect('flights/index');
    })

}