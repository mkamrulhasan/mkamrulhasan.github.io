/*====================================================================
                                Work
====================================================================*/
$(document).ready(function () {
    $('#work').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
        // other options
    });
});

/*====================================================================
                                Navigation
====================================================================*/
$(function(){
        
         var navOffset = 600;

    $(window).scroll(function() {
        var scrollPos = $(window).scrollTop();

        if( scrollPos >= navOffset) {
            $("#main-nav").show('slow');
        } else {
            $("#main-nav").hide('slow');
        }
    })
    
});

// For back to top
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 250) {
            // hide nav
            $("#back-to-top").fadeOut();

        } else {
            // show nav
            $("#back-to-top").fadeIn();
        }
    });
});


/*====================================================================
                                Smooth Scroll
====================================================================*/
 
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });





