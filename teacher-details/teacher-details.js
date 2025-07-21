$(document).ready(function () {
  // Function to animate elements on scroll
  function animateOnScroll() {
    var windowHeight = $(window).height();
    var scroll = $(window).scrollTop();

    // Animate Teacher Profile Card and Content sections
    $(".teacher-profile-card, .profile-section").each(function (i) {
      var position = $(this).offset().top;
      if (scroll + windowHeight * 0.9 > position) {
        // Add a delay to each item for a staggered effect
        $(this)
          .delay(i * 100)
          .queue(function () {
            $(this).addClass("visible").dequeue();
          });
      }
    });
  }

  // Add the necessary CSS for the animation directly into the head
  $(
    "<style>" +
      ".teacher-profile-card, .profile-section { opacity: 0; transform: translateY(30px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; }" +
      ".teacher-profile-card.visible, .profile-section.visible { opacity: 1; transform: translateY(0); }" +
      "</style>"
  ).appendTo("head");

  // Run the function on page load and on scroll
  $(window).on("scroll", animateOnScroll);
  animateOnScroll(); // Trigger on initial load

  // This part handles the browser's back-forward cache (bfcache).
  // It ensures that if a user navigates back to this page, the content reloads
  // so animations can run again.
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});