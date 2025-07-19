$(document).ready(function () {
  // Animate timeline items on scroll
  function animateOnScroll() {
    $(".timeline-container").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      // Check if the element is in view
      if (scroll + windowHeight * 0.85 > position) {
        $(this).addClass("visible");
      }
    });
  }

  // Add a 'visible' class for CSS animations
  // This avoids repeating it in the CSS file and keeps the logic together.
  $(
    "<style>.timeline-container { opacity: 0; transform: translateY(40px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; } .timeline-container.visible { opacity: 1; transform: translateY(0); }</style>"
  ).appendTo("head");

  // Add scroll listener
  $(window).on("scroll", animateOnScroll);
  // Trigger on page load as well
  animateOnScroll();

  // Smooth scroll for any internal anchor links
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 80, // Adjust for sticky header height
      },
      500,
      "linear"
    );
  });

  // Initialize Fancybox for any galleries on the page, if needed
  $('[data-fancybox="history-gallery"]').fancybox({
    buttons: ["zoom", "slideShow", "fullScreen", "thumbs", "close"],
    loop: true,
    protect: true, // Prevents right-clicking on images
  });

  // Force page reload when navigating back/forward to prevent caching issues (bfcache)
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});