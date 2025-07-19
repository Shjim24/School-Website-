$(document).ready(function () {
  // Animate the login container to make it visible on load
  function animateLoginContainer() {
    // Add a small delay for a better visual effect
    setTimeout(function() {
      $(".login-container").addClass("visible");
    }, 100);
  }

  animateLoginContainer();

  // Smooth scroll for any internal anchor links on the page
  $('a[href*="#"]').on("click", function (e) {
    // Check if the link is actually an anchor link
    if (this.hash !== "") {
      e.preventDefault();

      const hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 80, // Adjust 80px for a possible sticky header
        },
        500, // Animation speed in milliseconds
        "linear"
      );
    }
  });

  // This function forces a page reload on back/forward navigation.
  // It helps prevent issues with cached assets and ensures animations replay.
  window.onpageshow = function (event) {
    // 'event.persisted' is true if the page is from the bfcache (back/forward cache)
    if (event.persisted) {
      window.location.reload();
    }
  };
});