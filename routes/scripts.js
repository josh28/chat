var path = require('path');
var express = require('express');
var router = express.Router();

router.get('/jquery.js', function(req, res, next) {
    res.sendFile(path.join(__dirname, '..', 'node_modules', 'jquery', 'dist', 'jquery.js'))
});

router.get('/global.js', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'scripts', 'global.js'))
});

module.exports = router;
