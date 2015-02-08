var path = require('path');
var express = require('express');
var router = express.Router();

router.get('/jquery.js', function(req, res, next) {
    res.sendFile(path.join(__dirname, '..', 'node_modules', 'jquery', 'dist', 'jquery.js'))
});

router.get('/global.js', function(req, res, next) {
    res.sendFile(path.join(__dirname, 'scripts', 'global.js'))
});

router.get('/bootstrap.js', function(req, res, next) {
    res.sendFile(path.join(__dirname, '..', 'node_modules', 'bootstrap', 'dist', 'js', 'bootstrap.min.js'))
});

module.exports = router;
