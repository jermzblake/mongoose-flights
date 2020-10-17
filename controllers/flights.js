const flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,


}

function index(req, res, next) {
    res.render('flights/index');
  };

function newFlight(req, res, next) {
    res.render('flights/new', )
}