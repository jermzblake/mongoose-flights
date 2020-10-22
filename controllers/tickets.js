const Flight = require('../models/flight');
const Ticket = require('../models/ticket')

module.exports = {
    new: newTicket,
    create,
    delete: deleteOne
}

function newTicket(req, res){
    Flight.findById(req.params.id, function(err, flight){
    res.render('tickets/new', {flight})
    });
}

function create(req, res, next){
    const ticket = new Ticket(req.body);
    ticket.flight = req.params.id
    ticket.save(function(err){
        if(err){
            return res.render('tickets/new');
        }
        res.redirect(`/flights/${req.params.id}`);
    })
}

function deleteOne(req, res, next){
    Ticket.findByIdAndRemove(req.params.id, function(err){
        res.redirect(`/flights`)
    });
}
