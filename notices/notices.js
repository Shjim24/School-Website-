$(document).ready(function () {
  // Function to check if an element is in viewport
  function isInViewport(element) {
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  // Function to animate cards on scroll
  function animateNoticeCards() {
    $(".notice-card").each(function (i) {
      var card = $(this);
      // Add a delay to each card for a staggered effect
      setTimeout(function () {
        if (isInViewport(card) && !card.hasClass("is-visible")) {
          card.addClass("is-visible");
        }
      }, i * 100);
    });
  }

  // Add CSS for the animation
  // The animation starts with the card being invisible and slightly moved down
  // The 'is-visible' class makes it fade in and move up to its original position
  $(
    "<style>.notice-card { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; } .notice-card.is-visible { opacity: 1; transform: translateY(0); }</style>"
  ).appendTo("head");

  // Run the animation function on scroll and on initial page load
  $(window).on("scroll resize", animateNoticeCards);
  animateNoticeCards(); // Trigger on load to show cards already in view

  // Force page reload on back/forward navigation to re-trigger animations
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});