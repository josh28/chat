var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('chat', req.query);
});

router.get('/rooms', function(req, res, next) {
    res.json([{name: 'Lobby'}]);
});

module.exports = router;
