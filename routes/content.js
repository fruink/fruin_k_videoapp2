var express = require('express');
var router = express.Router();//route
var config = require('../config');
var bodyParser = require('body-parser');//body

//Profile messages based on which profile user clicks
var message = (config.kids) ? 'to Kid' : 'to Adult';
var title = (config.kids) ? 'Kids Profile - Online Movies' : 'Adults Profile - Online Movies';
/* Get kids profile page */
router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());

router.get('/', function(req, res, next) {
  res.render('content', {
    title: title,
    kids: config.kids,
    msg: message
  });
});

module.exports = router;
