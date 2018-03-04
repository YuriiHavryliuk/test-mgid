'use strict';

//slider implementation
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("js-slide");
    var dots = document.getElementsByClassName("js-slider-dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        (dots[i].classList.remove('active'));
    }
    for (i = 0; i < dots; i++) {
        dots[i].className = dots[i].className.replace("active", "a");
    }
    slides[slideIndex - 1].style.display = "block";
    (dots[slideIndex - 1].classList.add('active'));
}

//implementation of scrolls for forms
(function ($, window, document) {
    $(".js-scroll").on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });


    //implementation of the scroll in the select
    $(".js-sel").selectWidget({
        change: function (changes) {
            return changes;
        },
        effect: "slide",
        keyControl: true,
        speed: 200,
        scrollHeight: 140
    });

    //implementation of bars
    $((window).onscroll = function() {
        if ($(window).scrollTop() > 200) {
            jQuery('.js-skillbar').each(function () {
                jQuery(this).find('.js-skillbar__bar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 4000);
            });}

    });

}(window.jQuery, window, document));


//Copyrighting year of footer
var year = new Date().getFullYear();
document.getElementById('footer__year').innerHTML = year;


