$(document).ready(function () {
  // Animate fees section on scroll
  function animateOnScroll() {
    $(".fees-section").each(function () {
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
    "<style>.fees-section { opacity: 0; transform: translateY(40px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; } .fees-section.visible { opacity: 1; transform: translateY(0); }</style>"
  ).appendTo("head");

  $(window).on("scroll", animateOnScroll);
  animateOnScroll(); // Trigger on page load as well

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

  // Force page reload when navigating back/forward for browsers that use bfcache
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});