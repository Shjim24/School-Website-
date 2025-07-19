$(document).ready(function () {
  // Schedule filter tabs functionality
  $(".filter-btn").on("click", function () {
    // Button active state
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    // Get the filter value from data-filter attribute
    var filterValue = $(this).data("filter");

    // Hide all tables
    $(".schedule-table-container").removeClass("active");

    // Show the table that matches the filter value
    $("#" + filterValue).addClass("active");
  });

  // Force page reload when navigating back/forward for browsers that use bfcache
  // This helps if the user navigates away and back, ensuring the correct JS state.
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };

  // Smooth scroll for any internal links if needed (re-using from about.js)
  $('a[href*="#"]').on("click", function (e) {
    // Check if the link is just a placeholder
    if ($(this).attr("href") === "#") {
      e.preventDefault();
      return;
    }
    
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 80, // Adjust for sticky header
      },
      500,
      "linear"
    );
  });
});