var deviceDateTime = new Date().toLocaleString();

var settings = {
    "crossDomain": true,
    "url": "https://api-gate2.movieglu.com/filmsNowShowing/?n=10",
    "method": "GET",
    "timeout": 0,
    "headers": {
    "api-version": "v200",
    "Authorization": "Basic UEIQRV9YWDpiNGIFdINLTXVXdWs=",
    "client": "PIPE",
    "x-api-key": "v77F9YdobF6DHVd2TJpVhadfmvNnLrujPq8M4jJc",
    "device-datetime": `${deviceDateTime}`,
    "territory": "XX",
    "geolocation": "-22.0;14.0",
    },
    };
    
    $.ajax(settings).done(function (response) {
    console.log(response);
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