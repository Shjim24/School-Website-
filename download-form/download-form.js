$(document).ready(function () {
  // Add a 'visible' class for CSS-based animations to trigger on scroll
  function addVisibleOnScroll(selector, animationClass) {
    $(selector).each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll + windowHeight * 0.9 > position) {
        $(this).addClass(animationClass);
      }
    });
  }

  // Define the animation styles in the head
  $(
    "<style>.download-card, .instructions-box { opacity: 0; transform: translateY(40px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; } .download-card.visible, .instructions-box.visible { opacity: 1; transform: translateY(0); }</style>"
  ).appendTo("head");
  
  // Create a function to run all scroll animations
  function handleScrollAnimations() {
    addVisibleOnScroll(".download-card", "visible");
    addVisibleOnScroll(".instructions-box", "visible");
  }

  // Trigger animation on scroll and on initial load
  $(window).on("scroll", handleScrollAnimations);
  handleScrollAnimations();

  // Smooth scroll for any internal links on the page
  $('a[href*="#"]').on("click", function (e) {
    // Check if the link is actually on the current page
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 80, // Adjust for sticky header if any
          },
          500, // Speed in milliseconds
          "linear"
        );
      }
    }
  });

  // Force page reload when navigating back/forward for browsers that use bfcache
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});