var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

/* GET tickets page. */
router.get('/flights/:id/tickets/new', ticketsCtrl.new)
router.post('/fights/:id', ticketsCtrl.create)

module.exports = router;