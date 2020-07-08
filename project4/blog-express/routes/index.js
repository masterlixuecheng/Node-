var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express Demo Coding In Company' });
});

// router.get 相当于  method === 'GET'
module.exports = router;
