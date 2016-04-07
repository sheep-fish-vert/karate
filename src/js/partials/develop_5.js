function parallax(){
    var scrolled = $(window).scrollTop() - $('.fifth-wrap').offset().top;
    $('.magic').css('top', -(scrolled*0.2) + 'px');
}

function parallax2(){
    var scrolled = $(window).scrollTop() - $('.third-block').offset().top;
    $('.magik2').css('top', (scrolled*0.3) + 'px');
}

$(window).scroll(function(){
    parallax();
    parallax2();
});

$(document).ready(function(){

});

$(window).load(function(){

});

$(window).resize(function(){

});