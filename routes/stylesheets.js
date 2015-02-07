var path = require('path');
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/bootstrap.css', function(req, res, next) {
  res.sendFile(path.join(__dirname, '..', 'node_modules', 'bootstrap', 'dist', 'css', 'bootstrap.min.css'))
});

module.exports = router;
