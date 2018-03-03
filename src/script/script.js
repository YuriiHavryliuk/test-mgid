'use strict';

//slider implementation
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}
function showSlides(n){
    var i;
    var slides = document.getElementsByClassName("js-slide");
    var dots = document.getElementsByClassName("js-slider-dot");

    if( n > slides.length){
        slideIndex = 1;
    }
    if( n < 1 ){
        slideIndex = slides.length;
    }
    for ( i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
        (dots[i].classList.remove('active'));
    }
    for ( i = 0; i < dots; i++){
        dots[i].className = dots[i].className.replace("active", "a");
    }
    slides[slideIndex-1].style.display = "block";
    (dots[slideIndex-1].classList.add('active'));
}
