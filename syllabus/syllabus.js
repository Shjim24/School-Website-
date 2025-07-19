$(document).ready(function () {
  // Initialize Isotope for syllabus grid filtering
  var $grid = $(".syllabus-grid").isotope({
    itemSelector: ".syllabus-card",
    layoutMode: "fitRows",
    transitionDuration: "0.6s",
  });

  // Filter items on button click
  $(".syllabus-filters").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });

    // Manage active class on filter buttons
    $(".syllabus-filters button").removeClass("active");
    $(this).addClass("active");
  });

  // Animate cards on scroll for a nice entry effect
  function animateCardsOnScroll() {
    $(".syllabus-card").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll + windowHeight * 0.9 > position) {
        $(this).addClass("is-visible");
      }
    });
  }

  // Add CSS for card animation (fade in and up)
  $(
    "<style>.syllabus-card { opacity: 0; transform: translateY(40px); transition: opacity 0.5s ease-out, transform 0.5s ease-out; } .syllabus-card.is-visible { opacity: 1; transform: translateY(0); }</style>"
  ).appendTo("head");

  // Run animation function on scroll and on load
  $(window).on("scroll", animateCardsOnScroll);
  animateCardsOnScroll(); // Trigger on initial load

  // Force page reload on back/forward navigation if bfcache is used
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});