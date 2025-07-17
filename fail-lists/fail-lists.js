$(document).ready(function () {
  // --- Page Specific Logic for Fail List ---

  // Function to filter the table based on selected dropdown values
  function filterFailList() {
    const selectedClass = $("#filter-class").val();
    const selectedExam = $("#filter-exam").val();
    let visibleRows = 0;

    // Loop through each row in the table body
    $("#fail-list-tbody tr").each(function () {
      const rowClass = $(this).data("class");
      const rowExam = $(this).data("exam");

      // Check for matches
      const classMatch = selectedClass === "all" || rowClass === selectedClass;
      const examMatch = selectedExam === "all" || rowExam === selectedExam;

      // Show or hide the row
      if (classMatch && examMatch) {
        $(this).show();
        visibleRows++;
      } else {
        $(this).hide();
      }
    });

    // Optional: Show a message if no results are found
    if (visibleRows === 0) {
      // You can add a 'no results' row or message here if needed
      console.log("No matching records found.");
    }
  }

  // Attach event listener to the filter button
  $("#filter-btn").on("click", function (e) {
    e.preventDefault();
    filterFailList();
  });
  
  // --- General Page Logic (can be in a shared script.js) ---

  // Fancybox (if needed on this page, otherwise remove)
  // Example: $('[data-fancybox]').fancybox();

  // Force page reload when navigating back/forward for browsers that use bfcache
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});