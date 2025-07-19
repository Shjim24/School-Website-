$(document).ready(function () {
  // Animate lab cards on scroll
  function animateOnScroll() {
    $(".lab-card").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll + windowHeight * 0.85 > position) {
        $(this).addClass("visible");
      }
    });
  }

  // Add a 'visible' class for CSS animations
  $(
    "<style>.lab-card { opacity: 0; transform: translateY(40px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; } .lab-card.visible { opacity: 1; transform: translateY(0); }</style>"
  ).appendTo("head");

  $(window).on("scroll", animateOnScroll);
  animateOnScroll(); // Trigger on load

  // Smooth scroll for internal links
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

  // Fancybox gallery initialization for each lab
  function initializeFancybox(gallerySelector) {
    $(gallerySelector).fancybox({
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
      protect: true, // Prevents right-clicking on images
      transitionEffect: "slide",
      animationEffect: "fade",
    });
  }

  // Initialize for all lab galleries
  initializeFancybox('[data-fancybox="physics-gallery"]');
  initializeFancybox('[data-fancybox="chem-gallery"]');
  initializeFancybox('[data-fancybox="bio-gallery"]');
  initializeFancybox('[data-fancybox="computer-gallery"]');


  // Force page reload when navigating back/forward for browsers that use bfcache
  // This helps ensure animations re-trigger correctly.
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});