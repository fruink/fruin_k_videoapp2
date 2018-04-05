'use strict';

//js lightbox and pulling content (movies) from db

(function () {

  if (document.querySelector('.options')) {
    var movies = document.querySelector('.movies');
    movies.addEventListener('click', getMovies, false);
  }
  if (document.querySelector('#movies')) {
    var coverMovie = document.querySelectorAll('.cover');
    coverMovie.forEach(function (movie) {
      movie.addEventListener('click', getSingle, false);
    });
    getGenre.call();
}

  function getSingle(e) {
    var single = e.currentTarget.id;
    var url = 'movies/' + single;

    fetch(url).then(function (resp) {
      return resp.json();
    }).then(function (details) {
      openSingle(details);
    }).catch(function (error) {
      console.log(error);
    });
  }

  function getMovies() {
    var url = '/movies';

    fetch(url).then(function (resp) {
      return resp.json();
    }).then(function (details) {
      // console.log(details);
    }).catch(function (error) {
      console.log(error);
    });
  }


  function filterMovies(e) {
    var select = document.querySelector('.select');
    var value = select.value;
    var url = 'movies/genre/' + value;

    fetch(url).then(function (resp) {
      return resp.json();
    }).then(function (details) {
      // console.log(details);
      var container = document.querySelector('#movies');
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      details.movie.forEach(function (movie) {
        var newInfo = '<div id="' + movie.movies_id + '" class="cover">\n                   <h4>' + movie.movies_title + '</h4>\n                   <img src="images/' + movie.movies_cover + '" alt="' + movie.movies_title + '">\n                 </div>';
        container.innerHTML += newInfo;
      });
      var coverMovie = document.querySelectorAll('.cover');
      coverMovie.forEach(function (movie) {
        movie.addEventListener('click', getSingle, false);
      });
    }).catch(function (error) {
      console.log(error);
    });
  }

  function getGenre() {
    var url = 'movies/genre';

    fetch(url).then(function (resp) {
      return resp.json();
    }).then(function (details) {
      var select = document.querySelector('.select');
      details.genre.forEach(function (item) {
        var option = '<option value="' + item.genre_id + '">' + item.genre_name + '</option>';
        select.innerHTML += option;
      });
      select.addEventListener('change', filterMovies, false);
    }).catch(function (error) {
      console.log(error);
    });
  }


  function openSingle(details) {
    var movieDetails = details.movie[0];
    var container = document.body;
    var lightbox = document.querySelector('.lightbox');
    var light = '<div id="light-wrapper">\n      <div class="light">\n        <div><img src="images/' + movieDetails.movies_cover + '"></div>\n        <div class="movie-info">\n          <h2>' + movieDetails.movies_title + '<span>(' + movieDetails.movies_year + ')</span></h2><h4><i class="ion-pound"></i>' + movieDetails.movies_rating + '</4>\n          <span>' + movieDetails.genre_name + '</span>\n          <p>' + movieDetails.movies_storyline + '</p>\n          <div class="social-media"><i class="ion-social-facebook"></i><i class="ion-social-instagram"></i><i class="ion-social-googleplus-outline"></i><i class="ion-social-snapchat"></i><i class="ion-social-pinterest"></i><i class="ion-social-whatsapp"></i><i class="ion-social-twitter"></i></div>\n        </div>\n        <i class="ion-close"></i>\n      </div>\n      <figure class="videoMovie"><video controls src="videos/' + movieDetails.movies_trailer + '"></video></figure>\n    </div>';
    lightbox.style.display = "block";
    container.classList.add('no-scroll');
    lightbox.innerHTML = light;
    var closeBtn = document.querySelector('.ion-close');
    closeBtn.addEventListener('click', closeBox, false);

    function closeBox() {
      lightbox.style.display = "none";
      container.classList.remove('no-scroll');
    }
  }

})();
