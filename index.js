
function changeco(){
    var element = document.body;
    element.classList.toggle("lightmode");
    var ligh = document.getElementById("titl");
    var fotl = document.getElementById("foot");
    var buto = document.getElementById("but");
    const movi = document.querySelectorAll('.mov');
    if (ligh.style.backgroundColor === 'burlywood'){
        ligh.style.backgroundColor = 'rgba(175, 0, 255, 0.9)';
        ligh.style.color = 'white';
        ligh.style.borderColor = 'rgba(20,0,100)';
        fotl.style.backgroundColor = 'rgba(175, 0, 255, 0.9)';
        fotl.style.color = 'white';
        fotl.style.borderColor = 'rgba(20,0,100)';
        ligh.style.boxShadow = '0 0 1vh 0.5vh rgba(255, 255, 255, 0.8)';
        fotl.style.boxShadow = '0 0 1vh 0.5vh rgba(255, 255, 255, 0.8)';
        buto.value = "Toggle Light Mode";
        movi.forEach(mov => {
            mov.style.boxShadow = '0 0 1vh 0.5vh rgba(255, 255, 255, 0.8)';
        })

    }
    else{
        ligh.style.backgroundColor = 'burlywood';
        ligh.style.color = 'black';
        ligh.style.borderColor = 'black';   
        fotl.style.backgroundColor = 'burlywood';
        fotl.style.color = 'black';
        fotl.style.borderColor = 'black';   
        ligh.style.boxShadow = '0 0 1vh 0.5vh rgba(80, 0, 220, 0.8)';
        fotl.style.boxShadow = '0 0 1vh 0.5vh rgba(80, 0, 220, 0.8)';
        buto.value = "Toggle Dark Mode";
        movi.forEach(mov => {
            mov.style.boxShadow = '0 0 1vh 0.5vh rgba(80, 0, 220, 0.8)';
        })
    }
    
}