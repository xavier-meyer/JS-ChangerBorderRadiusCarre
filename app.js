let buttonMore = document.getElementById("button-more");
let buttonLess = document.getElementById("button-less");
let carre = document.getElementById("carre");
let radius = 0;
let radiusIncrement;

// fonction faire +1% border-radius au click du bouton buttonMore
buttonMore.addEventListener("click", function(){
    borderRadiusMore();
})
function borderRadiusMore(){
    radius++;
    carre.style.borderRadius = radius + "%"; 
    showValor();
}

// faire décrementer de 1% border radius
buttonLess.addEventListener("click", function(){
    borderRadiusLess();
    })
// fct border-radius -
function borderRadiusLess(){
    radius--;
    carre.style.borderRadius =  radius +"%"; 
    showValor();
}

// function afficher valeur border-radius
function showValor(){
document.getElementById("border-radius").innerHTML = carre.style.borderRadius;
}



