$( function() {
    $( ".header_burger" ).click("click", function() {
        $( ".header_burger,.header_menu" ).toggleClass( "active");
        $('.body').toggleClass('lock');
    });
} );
