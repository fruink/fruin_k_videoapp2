var express = require('express');
var router = express.Router();//route
var config = require('../config');//config
var connect = require('../utils/sqlConnect');//sql connect
var bodyParser = require('body-parser');//body
//trying to get the kids page to display
var renderPage = (config.kids) ? 'movies_kids' : 'movies';

router.use(bodyParser.urlencoded({ extended: false}));
router.use(bodyParser.json());

router.get('/', function(req, res, next){
  if(config.kids){
    //selects age approved movies for the kids profile from db
    var getMovies = `SELECT * FROM tbl_movies m, tbl_age_rating ara, tbl_mov_arating ma WHERE m.movies_id = ma.movies_id AND ar.arating_id = ma.arating_id`;
  }else{
    var getMovies = `SELECT * FROM tbl_movies`;
  }
  connect.query(getMovies, (err, result) =>{
    if(err){
      throw err; console.log(err);
    }else{
      console.log(result);
      res.render(renderPage , {
        title: 'Online Movies',
        kids: config.kids,
        movies : result
      });
    }
  });
});

router.get('/genre', (req, res) =>{
  if(config.kids){
    //query removes unapproved aged movies from the db based on inserts I entered. genre 4 and 7 are crime and horror that will not be available for kids to watch
    var getGenre = `SELECT * FROM tbl_genre WHERE NOT (genre_id="4" OR genre_id="7")`;
  }else{
    var getGenre = `SELECT * FROM tbl_genre`;//selects from tbl_genre to get the genres approved if not kids
  }
  connect.query(getGenre, (err, result) =>{
    if(err){
      throw err;
      console.log(err);
    }else{
      res.json({
        genre: result
      });
    }
  });
});

//genre and id for kids profile
router.get('/genre/:id', (req, res) =>{
  if (req.params.id == 0){
    // console.log(req.params.id);
      if(config.kids){
        var filterGenre = `SELECT * FROM tbl_movies m, tbl_age_rating ar, tbl_mov_arating ma WHERE m.movies_id = ma.movies_id AND ar.arating_id = ma.arating_id AND (ar.arating_id="1" OR ar.arating_id="2" OR ar.arating_id="3")`;
      }else{
        var filterGenre = `SELECT * FROM tbl_movies`;
      }
  }else{
      if(config.kids){
        var filterGenre = `SELECT * FROM tbl_genre g, tbl_movies m, tbl_mov_gen mg, tbl_age_rating ar, tbl_mov_arating ma WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id AND m.movies_id = ma.movies_id AND ar.arating_id = ma.arating_id AND (ar.arating_id="1" OR ar.arating_id="2" OR ar.arating_id="3") AND g.genre_id= ${req.params.id}`;
      }else{
        var filterGenre = `SELECT * FROM tbl_genre g, tbl_movies m, tbl_mov_gen mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id AND g.genre_id= ${req.params.id}`;
    }
  }
  connect.query(filterGenre, (err, result) =>{
    if(err){
      throw err;
      console.log(err);
    }else{
      res.json({
        movie : result
      });
    }
  });

});

router.get('/:id', function(req, res, next){//id
  //console.log(req.params.id);
  connect.query(`SELECT * FROM tbl_movies m, tbl_genre g, tbl_mov_gen mg WHERE m.movies_id = mg.movies_id AND g.genre_id = mg.genre_id AND m.movies_id = mg.movies_id AND m.movies_id="${req.params.id}"`, (err, result) =>{
    if(err){
      throw err; console.log(err);
    }else{
      console.log(result);
      res.json({
        movie : result
      });
    }
  });
});

module.exports = router;
