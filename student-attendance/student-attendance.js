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

    // In a real application, you would validate inputs
    const date = $("#attendanceDate").val();
    const selectedClass = $("#classSelect").val();
    const selectedSection = $("#sectionSelect").val();

    if (!date || !selectedClass || !selectedSection) {
      alert("Please select date, class, and section.");
      return;
    }

    // Show a loading/feedback effect
    const button = $(this).find("button[type='submit']");
    const originalText = button.html();
    button.html('<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...');
    button.prop("disabled", true);

    // Hide previous results
    $("#attendanceResult").addClass("d-none");

    setTimeout(function () {
      // Restore button
      button.html(originalText);
      button.prop("disabled", false);

      // Show the results section
      $("#attendanceResult").removeClass("d-none");

      // Re-trigger animations for the new "loaded" content
      // We must make them invisible first then re-apply the visible class
      $("#attendanceResult .animate-card")
        .removeClass("visible")
        .css("opacity", 0)
        .css("transform", "translateY(40px)");

      // Use a short timeout to allow the CSS to apply before adding the animation class
      setTimeout(function () {
        animateOnScroll();
      }, 50);
    }, 1500); // Simulate a longer network delay for fetching data
  });

  // Animate cards and table on scroll
  function animateOnScroll() {
    $("#attendanceResult .animate-card").each(function () {
      const position = $(this).offset().top;
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();

      if (scroll + windowHeight * 0.9 > position) {
        $(this).addClass("visible");
      }
    });
  }

  // Check on scroll, but only if results are visible
  $(window).on("scroll", function () {
    if (!$("#attendanceResult").hasClass("d-none")) {
      animateOnScroll();
    }
  });

  // Force page reload for bfcache
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});