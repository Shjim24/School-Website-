$(document).ready(function () {
  const searchInput = $("#book-search");
  const classFilter = $("#class-filter");
  const tableBody = $("#book-table-body");
  const allRows = tableBody.find("tr");
  const noResultsMessage = $("#no-results");

  function filterAndSearch() {
    const searchTerm = searchInput.val().toLowerCase().trim();
    const selectedClass = classFilter.val();
    let resultsFound = false;

    allRows.each(function () {
      const row = $(this);
      const rowClass = row.data("class");
      const rowText = row.text().toLowerCase();

      const classMatch = selectedClass === "all" || rowClass === selectedClass;
      const searchMatch = rowText.includes(searchTerm);

      if (classMatch && searchMatch) {
        row.show();
        resultsFound = true;
      } else {
        row.hide();
      }
    });

    if (resultsFound) {
      noResultsMessage.addClass("d-none");
    } else {
      noResultsMessage.removeClass("d-none");
    }
  }

  // Event listeners for search and filter
  searchInput.on("keyup", filterAndSearch);
  classFilter.on("change", filterAndSearch);

  // Initial call to set up the table correctly
  filterAndSearch();

  // Download button functionality (example: download as CSV)
  $("#download-btn").on("click", function () {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "ক্রমিক নং,শ্রেণী,বিষয়,বইয়ের নাম,লেখক/সম্পাদক,প্রকাশক\n"; // Add headers

    tableBody.find("tr:visible").each(function () {
      let rowData = [];
      $(this)
        .find("td")
        .each(function () {
          // Clean data for CSV
          let cellData = $(this).text().replace(/"/g, '""'); // Escape double quotes
          rowData.push(`"${cellData}"`);
        });
      csvContent += rowData.join(",") + "\n";
    });

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "book-list-xyz-school.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  // Force page reload when navigating back/forward for browsers that use bfcache
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});