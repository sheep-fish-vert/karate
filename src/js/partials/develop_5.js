function parallax(){
    var scrolled = $(window).scrollTop() - $('.fifth-wrap').offset().top;
    $('.magic').css('top', -(scrolled*0.2) + 'px');
}
$(window).scroll(function(){
    parallax();
});
$(document).ready(function(){

});

$(window).load(function(){

});

$(window).resize(function(){

});