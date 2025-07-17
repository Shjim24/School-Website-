$(document).ready(function () {
  const rowsPerPage = 5;
  let currentPage = 1;
  let filteredRows = [];

  const $tableBody = $("#student-table-body");
  const $allRows = $tableBody.find("tr");
  const $noResultsMessage = $("#no-results-message");
  const $paginationControls = $("#pagination-controls");

  function applyFilters() {
    const classFilter = $("#filter-class").val();
    const sectionFilter = $("#filter-section").val();
    const searchFilter = $("#filter-search").val().toLowerCase();

    filteredRows = $allRows.filter(function () {
      const row = $(this);
      const rowClass = row.find(".student-class").text();
      const rowSection = row.find(".student-section").text();
      const rowText = row.text().toLowerCase();

      const classMatch = classFilter === "" || rowClass === classFilter;
      const sectionMatch =
        sectionFilter === "" || rowSection === sectionFilter;
      const searchMatch = rowText.includes(searchFilter);

      return classMatch && sectionMatch && searchMatch;
    });

    if (filteredRows.length === 0) {
      $noResultsMessage.show();
      $tableBody.hide();
    } else {
      $noResultsMessage.hide();
      $tableBody.show();
    }

    currentPage = 1;
    setupPagination();
    displayPage(currentPage);
  }

  function displayPage(page) {
    currentPage = page;
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    $allRows.hide();
    filteredRows.slice(startIndex, endIndex).show();

    // Update pagination active state
    $paginationControls.find(".page-item").removeClass("active");
    $paginationControls
      .find(`.page-item a[data-page="${page}"]`)
      .parent()
      .addClass("active");
  }

  function setupPagination() {
    $paginationControls.empty();
    const pageCount = Math.ceil(filteredRows.length / rowsPerPage);

    if (pageCount <= 1) return;

    // Previous Button
    $paginationControls.append(
      `<li class="page-item ${
        currentPage === 1 ? "disabled" : ""
      }"><a class="page-link" href="#" data-page="${
        currentPage - 1
      }">পূর্ববর্তী</a></li>`
    );

    // Page Number Buttons
    for (let i = 1; i <= pageCount; i++) {
      $paginationControls.append(
        `<li class="page-item ${
          i === currentPage ? "active" : ""
        }"><a class="page-link" href="#" data-page="${i}">${i}</a></li>`
      );
    }

    // Next Button
    $paginationControls.append(
      `<li class="page-item ${
        currentPage === pageCount ? "disabled" : ""
      }"><a class="page-link" href="#" data-page="${
        currentPage + 1
      }">পরবর্তী</a></li>`
    );
  }

  // Event Listeners
  $("#student-filter-form").on("submit", function (e) {
    e.preventDefault();
    applyFilters();
  });

  $paginationControls.on("click", "a", function (e) {
    e.preventDefault();
    const page = parseInt($(this).data("page"));
    if (!isNaN(page) && page > 0) {
      displayPage(page);
      setupPagination(); // Re-render to update prev/next states
    }
  });

  // Initial Load
  applyFilters();

  // Force page reload on back/forward navigation
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});