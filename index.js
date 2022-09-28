const sea = document.getElementById('ser');
const searching = document.getElementById('searchlist');
const resg = document.getElementById('resultg');

async function loadMov(seter){
    const URL = `https://omdbapi.com/?s=${seter}&page=1&apikey=66aa064d`; //gör en variabel som lagrar api länk som det sedan under kan hämtas data ifrån, detta ifall det man söker på har någon relevans med datan
    const res = await fetch(`${URL}`); //response från länken
    const data = await res.json(); //datan ifrån apin
    if(data.Response == "True") displayMov(data.Search); //Om den får en response så körs Funktionen displayMov
}

function findMov(){
    let seter = (sea.value).trim();
    if(seter.length > 3){
        searching.classList.remove('hides');
        loadMov(seter);
    } else {
        searching.classList.add('hides');
    }
}

function displayMov(movies){
    searching.innerHTML = "";
    for(let i = 0; i < movies.length; i++){
        let movieListItem = document.createElement('div');
        movieListItem.dataset.id = movies[i].imdbID; 
        movieListItem.classList.add('searcher');
        if(movies[i].Poster != "N/A")
            moviePoster = movies[i].Poster;
        else 
            moviePoster = "image_not_found.png";

        movieListItem.innerHTML = `
        <div class = "serimg">
            <img src = "${moviePoster}">
        </div>
        <div class = "serinf">
            <h3>${movies[i].Title}</h3>
            <p>${movies[i].Year}</p>
        </div>
        `;
        searching.appendChild(movieListItem);
    }
    loadmovdet();
}

function loadmovdet(){
    const smovie = searching.querySelectorAll('.searcher');
    smovie.forEach(movie => {   
        movie.addEventListener('click', async () => {
            searching.classList.add('hides');
            sea.value = "";
            const result = await fetch(`http://www.omdbapi.com/?i=${movie.dataset.id}&apikey=66aa064d`);
            const movieDetails = await result.json();
            dismov(movieDetails);
        });
    });
}

async function dismov(details){
    const ytone = await fetch ("https://www.googleapis.com/youtube/v3/search?key=AIzaSyCROCRV-L97uWE3GV1xaFblpQ6Aoa6c7Ic&type=video&part=snippet&maxResults=1&q=" + details.Title + "     trailer");
    const yttwo = await ytone.json();
    const ytthree = yttwo.items[0].id.videoId;
    resg.innerHTML = `
    <div class = "movpos">
        <img src = "${(details.Poster != "N/A") ? details.Poster : "image_not_found.png"}" alt = "movie poster">
        <iframe id="trail" width:"420" height:"315" src="https://www.youtube.com/embed/${ytthree}" frameborder="0" allowfullscreen></iframe>
    </div>
    <div class = "movinf">
        <h4 class = "movtit">${details.Title}</h4>
        <ul class = "movlis">
            <li class = "year">Year: ${details.Year}</li>
            <li class = "rated">Rated: ${details.Rated}</li>
            <li class = "released">Released: ${details.Released}</li>
        </ul>
        <br>
        <p class = "genre"><b>Genre:</b> ${details.Genre}</p>
        <br>
        <p class = "ratings"<b>Imdb Rating:</b> ${details.imdbRating}</p>
        <br>
        <p class = "writer"><b>Writer:</b> ${details.Writer}</p>
        <br>
        <p class = "actors"><b>Actors: </b>${details.Actors}</p>
        <br>
        <p class = "plot"><b>Plot:</b> ${details.Plot}</p>
        <br>
        <p class = "language"><b>Language:</b> ${details.Language}</p>
        <br>
        <p class = "awards"><b><i class = "fas fa-award"></i></b> ${details.Awards}</p>
    </div>
    `;
}

window.addEventListener('click', (event) => {
    if(event.target.className != "inpt"){
        searching.classList.add('hides');
    }
});


function changeco(){

    var element = document.body;
    element.classList.toggle("lightmode");
    var ligh = document.getElementById("titl");
    var fotl = document.getElementById("foot");
    var buto = document.getElementById("but");
    const movi = document.querySelectorAll('.movinf');

    if (ligh.style.backgroundColor === 'rgba(180, 180, 180, 0.9)'){

        ligh.style.backgroundColor = 'rgba(20, 20, 20, 0.9)';
        ligh.style.color = 'white';
        ligh.style.borderColor = 'rgba(80,0,0)';
        fotl.style.backgroundColor = 'rgba(20, 20, 20, 0.4)';
        fotl.style.color = 'white';
        fotl.style.borderColor = 'rgba(80,0,0, 0.4)';
        ligh.style.boxShadow = '0 0 1vh 0.5vh rgba(255, 255, 255, 0.8)';
        fotl.style.boxShadow = '0 0 1vh 0.5vh rgba(255, 255, 255, 0.8)';
        buto.value = "Toggle Light Mode";
        buto.style.backgroundColor = 'white';
        buto.style.color = 'black';
        buto.style.borderColor = 'black';
        movi.forEach(movinf => {
            movinf.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            movinf.style.color = 'white';
        })

    }

    else{

        ligh.style.backgroundColor = 'rgba(180, 180, 180, 0.9)';
        ligh.style.color = 'black';
        ligh.style.borderColor = 'rgba(100, 100, 100, 0.8)';   
        fotl.style.backgroundColor = 'rgba(180, 180, 180, 0.4)';
        fotl.style.color = 'black';
        fotl.style.borderColor = 'rgba(100, 100, 100, 0.4)';   
        ligh.style.boxShadow = '0 0 1vh 0.6vh black';
        fotl.style.boxShadow = '0 0 1vh 0.6vh black';
        buto.value = "Toggle Dark Mode";
        buto.style.backgroundColor = 'black';
        buto.style.color = 'white';
        buto.style.borderColor = 'white';

        movi.forEach(movinf => {
            movinf.style.backgroundColor = 'rgba(180, 180, 180, 0.9)';
            movinf.style.color = 'black';
        })
    }
    
}