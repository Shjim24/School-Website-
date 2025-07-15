$(document).ready(function () {
  // --- Initial animation for staff cards ---
  function animateCardsOnLoad() {
    $(".staff-member-card").each(function (index) {
      $(this).css({ opacity: "0", transform: "translateY(40px)", transition: "opacity 0.6s ease-out, transform 0.6s ease-out" });
      setTimeout(() => { $(this).css({ opacity: "1", transform: "translateY(0)" }); }, index * 100);
    });
  }
  animateCardsOnLoad();

  // --- Filter logic for staff members ---
  function filterStaffMembers() {
    const departmentFilter = $("#department-filter").val();
    const typeFilter = $("#type-filter").val();
    $(".staff-member-card").each(function () {
      const memberDepartment = $(this).data("department");
      const memberType = $(this).data("type");
      const departmentMatch = departmentFilter === "" || departmentFilter === memberDepartment;
      const typeMatch = typeFilter === "" || typeFilter === memberType;
      if (departmentMatch && typeMatch) {
        $(this).fadeIn(300);
      } else {
        $(this).fadeOut(300);
      }
    });
  }

  // --- Event Handlers ---
  $("#department-filter, #type-filter").change(function () { filterStaffMembers(); });
  $(".staff-filter-form form").submit(function (e) { e.preventDefault(); filterStaffMembers(); });
  $(".pagination .page-link").click(function (e) {
    e.preventDefault();
    if ($(this).parent().hasClass("disabled") || $(this).parent().hasClass("active")) { return; }
    $(".pagination .page-item").removeClass("active");
    $(this).parent().addClass("active");
  });
  window.onpageshow = function (event) { if (event.persisted) { window.location.reload(); } };
});