$(document).ready(function () {
  // Handle the search button click event for filtering the merit list
  $("#search-btn").on("click", function () {
    var exam = $("#exam-filter").val();
    var studentClass = $("#class-filter").val();
    var section = $("#section-filter").val();
    var resultsFound = 0;

    // First, hide all data rows and the 'no result' message
    $(".merit-table tbody tr").not(".no-result-row").hide();
    $(".no-result-row").hide();

    // Iterate over each data row to check for matches
    $(".merit-table tbody tr")
      .not(".no-result-row")
      .each(function () {
        var row = $(this);
        var rowExam = row.data("exam");
        var rowClass = row.data("class").toString(); // Ensure it's a string for comparison
        var rowSection = row.data("section");

        // Check if the row matches the filter criteria.
        // An empty filter value (e.g., "-- শ্রেণী --") means "match all" for that category.
        var examMatch = exam === "" || exam === rowExam;
        var classMatch = studentClass === "" || studentClass === rowClass;
        var sectionMatch = section === "" || section === rowSection;

        // If all criteria match, show the row and increment the counter
        if (examMatch && classMatch && sectionMatch) {
          row.show();
          resultsFound++;
        }
      });

    // If no results were found after checking all rows, show the 'no result' message
    if (resultsFound === 0) {
      $(".no-result-row").show();
    }
  });
});