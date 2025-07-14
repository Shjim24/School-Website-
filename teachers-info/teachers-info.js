$(document).ready(function () {
  // --- Initial animation for cards ---
  function animateCardsOnLoad() {
    $(".committee-member-card").each(function (index) {
      // Initially hide the card
      $(this).css({
        opacity: "0",
        transform: "translateY(40px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      });

      // Reveal the card with a staggered delay
      setTimeout(() => {
        $(this).css({
          opacity: "1",
          transform: "translateY(0)",
        });
      }, index * 100);
    });
  }

  // Run the initial animation on page load
  animateCardsOnLoad();

  // --- Filter logic for teachers ---
  function filterTeachers() {
    const departmentFilter = $("#department-filter").val();
    const designationFilter = $("#designation-filter").val();

    $(".committee-member-card").each(function () {
      const teacherDepartment = $(this).data("department");
      const teacherDesignation = $(this).data("designation");

      // Check if the card matches the selected filters
      const departmentMatch =
        departmentFilter === "" || departmentFilter === teacherDepartment;
      const designationMatch =
        designationFilter === "" || designationFilter === teacherDesignation;

      if (departmentMatch && designationMatch) {
        $(this).fadeIn(300); // Show matching cards
      } else {
        $(this).fadeOut(300); // Hide non-matching cards
      }
    });
  }

  // --- Event Handlers ---

  // Trigger filtering when a select dropdown changes
  $("#department-filter, #designation-filter").change(function () {
    filterTeachers();
  });

  // Prevent form submission which reloads the page
  $(".committee-filter-form form").submit(function (e) {
    e.preventDefault();
    filterTeachers();
  });

  // Handle pagination click
  $(".pagination .page-link").click(function (e) {
    e.preventDefault();
    if (
      $(this).parent().hasClass("disabled") ||
      $(this).parent().hasClass("active")
    ) {
      return;
    }

    const page = $(this).text();
    console.log("Loading page:", page);

    $(".pagination .page-item").removeClass("active");
    $(this).parent().addClass("active");

    // NOTE: In a real implementation, you would use AJAX to load content for the new page.
  });

  // Force page reload on back/forward navigation to ensure scripts re-run
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});
