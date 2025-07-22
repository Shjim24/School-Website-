/*
 * Custom JS for Pathdan Onumuti Page
 * Author: Your Name
 * Version: 1.1
 */

$(document).ready(function () {
  // Animate content on scroll
  function animateOnScroll() {
    $(".recognition-table").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll + windowHeight * 0.9 > position) {
        $(this).addClass("visible");
      }
    });
  }

  // Add a 'visible' class for CSS animations
  $(
    "<style>.recognition-table { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; } .recognition-table.visible { opacity: 1; transform: translateY(0); }</style>"
  ).appendTo("head");

  $(window).on("scroll", animateOnScroll);
  animateOnScroll(); // Trigger on load

  // Smooth scroll for internal links (if any)
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 80, // Adjust for sticky header
      },
      500,
      "linear"
    );
  });

  // Fancybox initialization (if any images with data-fancybox are added)
  $('[data-fancybox="recognition-gallery"]').fancybox({
    buttons: ["zoom", "slideShow", "fullScreen", "download", "close"],
    loop: true,
    protect: true,
  });

  // Force page reload when navigating back/forward for browsers that use bfcache
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});