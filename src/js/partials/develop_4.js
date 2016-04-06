
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

$(document).ready(function(){
    formStyle();
    checkRadioButton();
});

$(window).load(function(){

});

$(window).resize(function(){

});
