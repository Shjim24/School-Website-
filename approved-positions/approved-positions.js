$(document).ready(function () {
  // Animate table container on scroll
  function animateOnScroll() {
    $(".animate-on-scroll").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll + windowHeight * 0.9 > position) {
        $(this).addClass("visible");
      }
    });
  }

  // Initial check on page load
  animateOnScroll();

  // Check on scroll
  $(window).on("scroll", animateOnScroll);

  // Force page reload when navigating back/forward to ensure animations re-run
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});