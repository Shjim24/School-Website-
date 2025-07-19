$(document).ready(function () {
  // Initialize Isotope for gallery filtering
  var $grid = $(".gallery-grid").isotope({
    itemSelector: ".gallery-item-col",
    layoutMode: "fitRows",
    transitionDuration: "0.6s",
  });

  // Filter items on button click
  $(".gallery-filter-nav").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });

    // Update active state of buttons
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");
  });

  // Initialize Fancybox for the gallery
  $('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close",
    ],
    loop: true, // Allows looping through gallery images
    protect: true, // Prevents right-click download on images
    transitionEffect: "slide", // Animation effect
    infobar: true,
    arrows: true,
  });

  // Animate gallery items on scroll for a reveal effect
  function animateOnScroll() {
    $(".gallery-item").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll + windowHeight * 0.9 > position) {
        $(this).addClass("visible");
      }
    });
  }

  // Add a 'visible' class for CSS animations (fade in and up)
  $(
    "<style>.gallery-item { opacity: 0; transform: translateY(40px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; } .gallery-item.visible { opacity: 1; transform: translateY(0); }</style>"
  ).appendTo("head");

  $(window).on("scroll", animateOnScroll);
  animateOnScroll(); // Trigger on initial load

  // Re-run animations after isotope filtering
  $grid.on('layoutComplete', function() {
    animateOnScroll();
  });

  // Force page reload when navigating back/forward for browsers that use bfcache
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});