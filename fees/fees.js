$(document).ready(function () {
  // Function to animate elements on scroll
  function animateOnScroll() {
    var windowHeight = $(window).height();
    var scroll = $(window).scrollTop();

    // Animate Payment Cards
    $(".payment-card").each(function () {
      var position = $(this).offset().top;
      if (scroll + windowHeight * 0.9 > position) {
        $(this).addClass("visible");
      }
    });

    // Animate Notes Box
    $(".notes-box").each(function () {
      var position = $(this).offset().top;
      if (scroll + windowHeight * 0.95 > position) {
        $(this).addClass("visible");
      }
    });

    // Animate Fees Table
    $(".fees-table").each(function () {
      var position = $(this).offset().top;
      if (scroll + windowHeight * 0.95 > position) {
        $(this).addClass("visible");
      }
    });
  }

  // Add CSS for animations
  $(
    "<style>" +
      ".payment-card, .notes-box, .fees-table {" +
      "  opacity: 0;" +
      "  transform: translateY(40px);" +
      "  transition: opacity 0.6s ease-out, transform 0.6s ease-out;" +
      "}" +
      ".payment-card.visible, .notes-box.visible, .fees-table.visible {" +
      "  opacity: 1;" +
      "  transform: translateY(0);" +
      "}" +
      /* Staggered animation for payment cards */
      ".payment-card:nth-child(1) { transition-delay: 0.1s; }" +
      ".payment-card:nth-child(2) { transition-delay: 0.2s; }" +
      ".payment-card:nth-child(3) { transition-delay: 0.3s; }" +
      ".payment-card:nth-child(4) { transition-delay: 0.4s; }" +
      "</style>"
  ).appendTo("head");

  // Attach the animation function to the scroll event
  $(window).on("scroll", animateOnScroll);

  // Trigger the animation on page load
  animateOnScroll();

  // Force page reload when navigating back/forward for browsers that use bfcache
  // This ensures animations re-run if the user navigates back to the page
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});