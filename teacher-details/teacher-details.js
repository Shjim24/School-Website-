$(document).ready(function () {
  // Function to animate elements on scroll
  function animateOnScroll() {
    var windowHeight = $(window).height();
    var scroll = $(window).scrollTop();

    // Animate Teacher Profile Card
    $(".teacher-profile-card").each(function () {
      var position = $(this).offset().top;
      if (scroll + windowHeight * 0.85 > position) {
        $(this).addClass("visible");
      }
    });

    // Animate Notice Items
    $(".notice-item").each(function (i) {
      var position = $(this).offset().top;
      if (scroll + windowHeight * 0.9 > position) {
        // Add a delay to each item for a staggered effect
        $(this)
          .delay(i * 150)
          .queue(function () {
            $(this).addClass("visible").dequeue();
          });
      }
    });
  }

  // Add CSS for animations
  $(
    "<style>" +
      ".teacher-profile-card, .notice-item { opacity: 0; transform: translateY(40px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }" +
      ".teacher-profile-card.visible, .notice-item.visible { opacity: 1; transform: translateY(0); }" +
      "</style>"
  ).appendTo("head");

  // Initial and scroll event trigger
  $(window).on("scroll", animateOnScroll);
  animateOnScroll();

  // Force page reload when navigating back/forward for browsers that use bfcache
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});