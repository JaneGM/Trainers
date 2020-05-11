//Menu
$( function() {
    $( ".header_burger" ).click("click", function() {
        $( ".header_burger,.header_menu" ).toggleClass( "active");
        $('.body').toggleClass('lock');
    });
} );
// Carousel
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            800:{
                items:2
            },
        }
    });
});