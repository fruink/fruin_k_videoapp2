var express = require('express');
var router = express.Router();
var config = require('../config');
var bodyParser = require('body-parser');//body

//checking
var toRender = (config.kidsmode) ? 'main_kids' : 'home';

router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());
//home
router.get('/', function(req, res, next){
  res.render('home', {
    title: 'Online Movies',
    message : "Who's watching today?",
    mainpage : true,
    kidsmode : config.kidsmode
  });
});
//kids
router.get('/movies_kids', (req, res) =>{
  connect.query('SELECT * FROM tbl_user', (err, result) =>{
    if (err){
      throw err; console.log(err);
    }else{
      console.log(result);
  }
 });
});

module.exports = router;
