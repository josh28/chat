var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('chat', {title: 'Room: Lobby', n: req.query, room: 'Lobby', userCount: 1});
});

router.get('/rooms', function(req, res, next) {
    res.json([{name: 'Lobby'}]);
});

module.exports = router;
