console.log("hello");
$(document).ready(function() {
  //the document ready thing is a command that lets everything load first. but if you have the script near the bottom of the body then you dont really need this bit.

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    }); //end of smooth scroll

  //flickity carousel
  $(".main-carousel").flickity({
    // options
    cellAlign: "left",
    wrapAround: true
    // contain: true
  });

  $("form").on("submit", function(event) {
    event.preventDefault();
    if ($("#e-mail").val() == "") {
      alert("You missed the field.");
    } else {
      alert("Thanks for filling the field!");
    }
  });
});
