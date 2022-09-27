const movieSearchBox = document.getElementById('movie-search-box');
const searchList = document.getElementById('search-list');
const resultGrid = document.getElementById('result-grid');

// load movies from API
async function loadMovies(searchTerm){
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=d64588a9`;
    const res = await fetch(`${URL}`);
    const data = await res.json();
    // console.log(data.Search);
    if(data.Response == "True") displayMovieList(data.Search);
}

function findMovies(){
    let searchTerm = (movieSearchBox.value).trim();
    if(searchTerm.length > 0){
        searchList.classList.remove('hide-search-list');
        loadMovies(searchTerm);
    } else {
        searchList.classList.add('hide-search-list');
    }
}

function displayMovieList(movies){
    searchList.innerHTML = "";
    for(let idx = 0; idx < movies.length; idx++){
        let movieListItem = document.createElement('div');
        movieListItem.dataset.id = movies[idx].imdbID; // setting movie id in  data-id
        movieListItem.classList.add('search-list-item');
        if(movies[idx].Poster != "N/A")
            moviePoster = movies[idx].Poster;
        else 
            moviePoster = "image_not_found.png";

        movieListItem.innerHTML = `
        <div class = "search-item-thumbnail">
            <img src = "${moviePoster}">
        </div>
        <div class = "search-item-info">
            <h3>${movies[idx].Title}</h3>
            <p>${movies[idx].Year}</p>
        </div>
        `;
        searchList.appendChild(movieListItem);
    }
    loadMovieDetails();
}

function loadMovieDetails(){
    const searchListMovies = searchList.querySelectorAll('.search-list-item');
    searchListMovies.forEach(movie => {
        movie.addEventListener('click', async () => {
            // console.log(movie.dataset.id);
            searchList.classList.add('hide-search-list');
            movieSearchBox.value = "";
            const result = await fetch(`http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=d64588a9`);
            const movieDetails = await result.json();
            // console.log(movieDetails);
            displayMovieDetails(movieDetails);
        });
    });
}

function displayMovieDetails(details){
    resultGrid.innerHTML = `
    <div class = "movie-poster">
        <img src = "${(details.Poster != "N/A") ? details.Poster : "image_not_found.png"}" alt = "movie poster">
    </div>
    <div class = "movie-info">
        <h3 class = "movie-title">${details.Title}</h3>
        <ul class = "movie-misc-info">
            <li class = "year">Year: ${details.Year}</li>
            <li class = "rated">Ratings: ${details.Rated}</li>
            <li class = "released">Released: ${details.Released}</li>
        </ul>
        <p class = "genre"><b>Genre:</b> ${details.Genre}</p>
        <p class = "writer"><b>Writer:</b> ${details.Writer}</p>
        <p class = "actors"><b>Actors: </b>${details.Actors}</p>
        <p class = "plot"><b>Plot:</b> ${details.Plot}</p>
        <p class = "language"><b>Language:</b> ${details.Language}</p>
        <p class = "awards"><b><i class = "fas fa-award"></i></b> ${details.Awards}</p>
    </div>
    `;
}


window.addEventListener('click', (event) => {
    if(event.target.className != "form-control"){
        searchList.classList.add('hide-search-list');
    }
});


function changeco(){

    var element = document.body;
    element.classList.toggle("lightmode");
    var ligh = document.getElementById("titl");
    var fotl = document.getElementById("foot");
    var buto = document.getElementById("but");
    const movi = document.querySelectorAll('.mov');

    if (ligh.style.backgroundColor === 'rgba(180, 180, 180, 0.9)'){

        ligh.style.backgroundColor = 'rgba(150, 0, 0, 0.9)';
        ligh.style.color = 'white';
        ligh.style.borderColor = 'rgba(80,0,0)';
        fotl.style.backgroundColor = 'rgba(150, 0, 0, 0.9)';
        fotl.style.color = 'white';
        fotl.style.borderColor = 'rgba(80,0,0)';
        ligh.style.boxShadow = '0 0 1vh 0.5vh rgba(255, 255, 255, 0.8)';
        fotl.style.boxShadow = '0 0 1vh 0.5vh rgba(255, 255, 255, 0.8)';
        buto.value = "Toggle Light Mode";
        buto.style.backgroundColor = 'white';
        buto.style.color = 'black';
        buto.style.borderColor = 'black';

        movi.forEach(mov => {
        mov.style.boxShadow = '0 0 1vh 0.5vh rgba(255, 255, 255, 0.8)';
        document.body.style.backgroundImage = "url('red.png')";
        })

    }

    else{

        ligh.style.backgroundColor = 'rgba(180, 180, 180, 0.9)';
        ligh.style.color = 'black';
        ligh.style.borderColor = 'rgba(100, 100, 100, 0.8)';   
        fotl.style.backgroundColor = 'rgba(180, 180, 180, 0.9)';
        fotl.style.color = 'black';
        fotl.style.borderColor = 'rgba(100, 100, 100, 0.8)';   
        ligh.style.boxShadow = '0 0 1vh 0.6vh black';
        fotl.style.boxShadow = '0 0 1vh 0.6vh black';
        buto.value = "Toggle Dark Mode";
        buto.style.backgroundColor = 'black';
        buto.style.color = 'white';
        buto.style.borderColor = 'white';

        movi.forEach(mov => {
            mov.style.boxShadow = '0 0 1vh 0.6vh black';
         document.body.style.backgroundImage = "url('pur.png')";
        })
    }
    
}