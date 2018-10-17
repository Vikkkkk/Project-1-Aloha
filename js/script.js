console.log("hello");
$(document).ready(function() {
  //the document ready thing is a command that lets everything load first. but if you have the script near the bottom of the body then you dont really need this bit.

  // When the user scrolls the page, execute StickyFunction
  window.onscroll = function() {
    StickyFunction();
  };

  // Get the header
  var header = document.getElementById("myHeader");

  // Get the offset position of the navbar
  var sticky = header.offsetTop;

  // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function StickyFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }
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
    wrapAround: true,
    contain: true,
    prevNextButtons: false
  });

  $("form").on("submit", function(event) {
    event.preventDefault();
    if ($("#e-mail").val() == "") {
      alert("You missed the field Dumbass!! 🤬");
    } else {
      alert("Thanks for filling the field!");
    }
  });

  let cartitem = 0;

  $("button").click(function() {
    cartitem++;
    $(".count").html(cartitem);
  });
});
