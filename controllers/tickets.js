const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res){
    Flight.findById(req.params.id, function(err, flight){
    res.render('tickets/new', {flight})
    });
}

function create(req, res, next){
    Flight.findById(req.params.id, function(err, flight){
    

}