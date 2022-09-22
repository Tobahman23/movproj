
function changeco(){
    var element = document.body;
    element.classList.toggle("lightmode");
    var ligh = document.getElementById("titl");
    if (ligh.style.backgroundColor === 'burlywood'){
        ligh.style.backgroundColor = 'rgba(175, 0, 255, 0.9)';
        ligh.style.color = 'white';
        ligh.style.borderColor = 'rgba(20,0,100)';
    }
    else{
        ligh.style.backgroundColor = 'burlywood';
        ligh.style.color = 'black';
        ligh.style.borderColor = 'brown';   
    }
    
}