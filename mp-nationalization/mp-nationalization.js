$(document).ready(function () {
  // Animate info cards on scroll
  function animateOnScroll() {
    $(".animate-card").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      // Trigger animation when the top of the element is 90% up the viewport
      if (scroll + windowHeight * 0.9 > position) {
        $(this).addClass("visible");
      }
    });
  }

  // Initial check on page load to see if cards are already in view
  animateOnScroll();

  // Check on every scroll event
  $(window).on("scroll", animateOnScroll);

  // This function ensures that if a user navigates back using browser buttons,
  // the page reloads, allowing animations to run again.
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});