$(document).ready(function () {
  // Animate timeline items on scroll
  function animateOnScroll() {
    var windowHeight = $(window).height();
    var scroll = $(window).scrollTop();

    $(".timeline-container").each(function () {
      var position = $(this).offset().top;
      if (scroll + windowHeight * 0.85 > position) {
        $(this).addClass("visible");
      }
    });
  }

  // Add a 'visible' class for CSS animations for timeline
  if ($(".timeline-container").length) {
    $(
      "<style>.timeline-container { opacity: 0; transform: translateY(40px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; } .timeline-container.visible { opacity: 1; transform: translateY(0); }</style>"
    ).appendTo("head");
  }

  // Animate gallery cards on scroll
  function animateCards(selector) {
    var windowHeight = $(window).height();
    var scroll = $(window).scrollTop();

    $(selector).each(function () {
      var position = $(this).offset().top;
      if (scroll + windowHeight * 0.9 > position) {
        $(this).addClass("animate-card");
      }
    });
  }

  // Add CSS for card animation
  if ($(".gallery-card").length) {
    $(
      "<style>.gallery-card { opacity: 0; transform: translateY(50px); transition: opacity 0.5s ease-out, transform 0.5s ease-out 0.2s; } .gallery-card.animate-card { opacity: 1; transform: translateY(0); }</style>"
    ).appendTo("head");
  }

  // Trigger animations on scroll
  $(window).on("scroll", function () {
    animateOnScroll();
    animateCards(".gallery-card");
  });

  // Trigger on load
  animateOnScroll();
  animateCards(".gallery-card");

  // Initialize Fancybox for the memorial gallery
  $('[data-fancybox="memorial-gallery"]').fancybox({
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close",
    ],
    loop: true,
    protect: true, // Prevents right-click on images
    transitionEffect: "slide",
    infobar: true,
    caption: function (instance, item) {
      return $(this).data("caption") || "";
    },
  });
});