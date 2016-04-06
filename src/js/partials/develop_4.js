
function formStyle(){
    $('.lend-form .radio-holder input').styler();
    $('.lend-form select').styler();
}
function checkRadioButton(){
    $('.radio-holder input').change(function(event) {
       if($('.radio-holder input').is(':checked')) {
        var el = $(this).closest('.radio-holder').index();
            var parent = $(this).closest('.form-body');
            parent.find('.selects-wrap>div').removeClass('active');
            parent.find('.selects-wrap>div').eq(el).addClass('active');
        }
    });
}

function childrenParalax(){
    var sectTop = $('.second-block ').offset().top-170;
    $(window).scroll(function(event) {
        if( $(window).scrollTop()>= sectTop ){
            var minus = $(window).scrollTop() - sectTop;
            console.log('minus ' , minus);
            if( minus >= 80 ){
                minus = 80;
            }
            $('.second-block .red-block .red-block-img img').css('margin-top', +minus+'px');
            $('.second-block .yellow-block .yellow-block-img img').css('margin-top', +minus+'px');
        }
    });
}

$(document).ready(function(){
    formStyle();
    checkRadioButton();
    childrenParalax();
});

$(window).load(function(){

});

$(window).resize(function(){

});
