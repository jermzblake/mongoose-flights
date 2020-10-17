const flight = require('../models/flight');

module.exports = {
    index,
    create,


}

function index(req, res, next) {
    res.render('flights/index');
  };

function create(req, res, next) {
    res.render('flights/new')
}