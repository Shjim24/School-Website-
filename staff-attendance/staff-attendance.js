$(document).ready(function () {
  // Set default date to today in the date picker
  function setDefaultDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const today = `${year}-${month}-${day}`;
    $("#attendanceDate").val(today);
  }

  setDefaultDate();

  // Handle form submission
  $(".filter-form-wrapper form").on("submit", function (e) {
    e.preventDefault();
    // In a real application, you would use the selected date
    // to fetch data via AJAX and update the table and summary.
    // For this demo, we just show a visual confirmation.

    // Show a loading/feedback effect
    const button = $(this).find("button[type='submit']");
    const originalText = button.html();
    button.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...');
    button.prop("disabled", true);

    setTimeout(function () {
      // Restore button and reveal content
      button.html(originalText);
      button.prop("disabled", false);

      // Re-trigger animations for the new "loaded" content
      $(".animate-card").removeClass("visible");
      animateOnScroll();
    }, 1000); // Simulate network delay
  });

  // Animate cards and table on scroll
  function animateOnScroll() {
    $(".animate-card").each(function () {
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll + windowHeight * 0.9 > position) {
        $(this).addClass("visible");
      }
    });
  }

  // Initial check on page load
  animateOnScroll();

  // Check on scroll
  $(window).on("scroll", animateOnScroll);

  // Force page reload for bfcache
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});