 

    jQuery(document).ready(function ($) {

        "use strict";

        
        


        if($( ".protfolio-projects" ).length) {
            // directional hover
            $('.dh-container').directionalHover();

            $('.dh-container').directionalHover({
             
            
                // CSS class for the overlay
                overlay:"dh-overlay",
               
                // Linear or swing
                easing:"swing",
               
                // <a href="https://www.jqueryscript.net/animation/">Animation</a> speed in ms
                speed: 270
                 
              });
        }

        if( $(".info-section").length ) {
            //counter up
            $('.counter').countUp();
        }
        

        

        // directional hover end


        //mobile menu

        $('.navbar-toggler').click(function() {
            $('.mobile-menu').slideToggle('slow', function() {
                $('.mobile-menu').toggleClass('active', $(this).is(':visible'));
              });
        });


    });