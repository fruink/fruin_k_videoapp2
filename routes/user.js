var express = require('express');
var router = express.Router();
var config = require('../config');
var bodyParser = require('body-parser');//body

/* GET kids page. */
router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  res.render('user', { title: 'User - Online Movies' });
});

module.exports = router;
