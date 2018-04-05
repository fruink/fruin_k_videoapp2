(() => {

  //get a movie from db
  function getSingle(e){
    let single = e.currentTarget.id;
    let url = 'movies/' + single;

    fetch(url)
      .then((resp) => resp.json())
        .then((details) =>{
          openSingle(details);
        })
        .catch(function(error) {
          console.log(error);
        });
  }

  function getMovies(){
    let url = '/movies';//get movies from db

    fetch(url)
      .then((resp) => resp.json())
        .then((details) =>{
          // console.log(details);
        })
        .catch(function(error) {
          console.log(error);
        });
    }

    //select movie genres from db
    function getGenre(){
    let url = 'movies/genre';

    fetch(url)
      .then((resp) => resp.json())
      .then((details) => {
        let select = document.querySelector('.select');
        details.genre.forEach((item) =>{
          //user chooses their movie genre in the options dropdown
          let option = `<option value="${item.genre_id}">${item.genre_name}</option>`;
          select.innerHTML += option;
        });

        select.addEventListener('change', filterMovies, false);
      })

      .catch(function(error) {
        console.log(error);
      });
    }

    //movies cover
    if(document.querySelector('#movies')){
      let coverMovie = document.querySelectorAll('.cover');//movie cover from /images
      coverMovie.forEach((movie) =>{//gets movie cover for each movie in db
        movie.addEventListener('click', getSingle, false);
      });
      getGenre.call();//all movie genres
    }

    //movies options for selection
    if(document.querySelector('.options')){
      let movies = document.querySelector('.movies');
      movies.addEventListener('click', getMovies, false);
    }

  //open and play video with lightbox when user clicks on movie cover or blue title on cover
  //lightbox displays movie details for user based on ratings, cover, desc, and .mp4
  function openSingle(details){
    let movieDetails = details.movie[0];//all movies from db
    let container = document.body;
    let lightbox = document.querySelector('.lightbox');//popup lightbox to play selected movie (simple js lightbox that displays movie details and .mp4)
    let light = `<div id="light-wrapper">
      <div class="light">
        <div><img src="images/${movieDetails.movies_cover}"></div>
        <div class="movie-info">
          <h2>${movieDetails.movies_title}<span>${movieDetails.movies_year}</span></h2><h4><i class="ion-pound"></i>${movieDetails.movies_rating}</4>
          <span>${movieDetails.genre_name}</span>
          <p>${movieDetails.movies_storyline}</p>
          <div class="social-media">
          <i class="ion-social-facebook">
          </i><i class="ion-social-instagram">
          </i><i class="ion-social-googleplus-outline">
          </i><i class="ion-social-snapchat">
          </i><i class="ion-social-pinterest">
          </i><i class="ion-social-whatsapp">
          </i><i class="ion-social-twitter">
          </i>
          </div>
        </div>
        <i class="ion-close"></i>
      </div>

      <figure class="videoMovie"><video controls src=../videos/{movieDetails.movies_trailer}></video></figure>

    </div>`;

    //lightbox close
    container.classList.add('no-scroll');
    lightbox.innerHTML = light;
    let closeBtn = document.querySelector('.ion-close');//x icon closes lightbox
    closeBtn.addEventListener('click', closeBox, false);

    function closeBox(){
      container.classList.remove('no-scroll');
    }
  }


  //filter through movies in db for user to click on and watch
  function filterMovies(e){
    let select = document.querySelector('.select');
    let value = select.value;
    let url = 'movies/genre/'+value;

      fetch(url)
        .then((resp) => resp.json())
        .then((details) =>{
          //movie container holds movies in localhost:3000/movies
          let container = document.querySelector('#movies');
          while(container.firstChild){
               container.removeChild(container.firstChild);
             }

             //displays movies details by showing user the movie cover, movie rating, movie genre, and movie description plus option to watch the movie in the popup lightbox
             details.movie.forEach((movie) =>{
               let newInfo = `<div id="${movie.movies_id}" class="cover">
                   <h4>${movie.movies_title}</h4>
                   <img src="images/${movie.movies_cover}" alt="${movie.movies_title}">
                 </div>`;
               container.innerHTML += newInfo;
             });
             //displays movie covers for user's to view and watch in lightbox
             let coverMovie = document.querySelectorAll('.cover');
             coverMovie.forEach((movie) =>{
             movie.addEventListener('click', getSingle, false);
          });
      })

        .catch(function(error) {
          console.log(error);
        });
      }

})();
