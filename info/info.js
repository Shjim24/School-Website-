javascript
$(document).ready(function () {
  // Function to animate elements when they scroll into view
  function animateOnScroll() {
    // Select all items to be animated
    var itemsToAnimate = $(".timeline-container, .process-card");

    itemsToAnimate.each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      // Check if the item is in the viewport
      if (scroll + windowHeight * 0.9 > position) {
        if ($(this).hasClass("timeline-container")) {
          $(this).addClass("visible");
        }
        if ($(this).hasClass("process-card")) {
          $(this).addClass("animate-card");
        }
      }
    });
  }

  // Inject the CSS needed for animations into the head
  $(
    "<style>" +
    ".timeline-container { opacity: 0; transform: translateY(50px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }" +
    ".timeline-container.visible { opacity: 1; transform: translateY(0); }" +
    ".process-card { opacity: 0; transform: translateY(40px); transition: opacity 0.5s ease-out, transform 0.5s ease-out; }" +
    ".process-card.animate-card { opacity: 1; transform: translateY(0); }" +
    "</style>"
  ).appendTo("head");

  // Listen for scroll events
  $(window).on("scroll", animateOnScroll);

  // Trigger the check once on page load for elements already in view
  animateOnScroll();

  // Ensure animations re-run if the page is loaded from the browser's back/forward cache
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});