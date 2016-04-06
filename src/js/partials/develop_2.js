function googleMap(mapWrap){
    function initialize() {
        var cordX = 0;
        var cordY = 0;
        var i;
        console.log(cordX);
        for (i = 0; i < locations.length; i++) {
            cordX = cordX + locations[i][1];
            cordY = cordY + locations[i][2];
        }

        cordX = cordX / locations.length;
        cordY = cordY / locations.length;

        var myLatlng = new google.maps.LatLng(cordX,cordY);
        var myOptions = {
            zoom: 11,
            center: myLatlng,
            disableDefaultUI: true, //без управляющих елементов
            mapTypeId: google.maps.MapTypeId.ROADMAP, // SATELLITE - снимки со спутника,
            zoomControlOptions: {
               position: google.maps.ControlPosition.LEFT_BOTTOM // позиция слева внизу для упр елементов
            }
        }
        var map = new google.maps.Map(document.getElementById(mapWrap), myOptions);

        for (i = 0; i < locations.length; i++) {  
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                animation: google.maps.Animation.DROP,
                icon: locations[i][3]
            });

            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    //infowindow.setContent(locations[i][0]);
                    //infowindow.open(map, marker);
                }
            })(marker, i));
        }

    }
    initialize();
}


$(document).ready(function() {
    googleMap('map');

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        arrow: true,
        focusOnSelect: true
    });

    $('.show-hide-nav-text').click(function() {
        if (!$('.header-menu-list').hasClass('opened-menu')){
            $('.header-menu-list').addClass('opened-menu');
            console.log('open');
        }        
    });

    $('.close-button').click(function() {
        if ($('.header-menu-list').hasClass('opened-menu')){
            $('.header-menu-list').removeClass('opened-menu');
        }        
    });
        
    
});

$(window).load(function() {

});

$(window).resize(function() {

});