$(document).ready(function () {
  // Handle Result Search Form Submission
  $("#resultSearchForm").on("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    // --- Validation (Simple Example) ---
    var examType = $("#examType").val();
    var examYear = $("#examYear").val();
    var rollNumber = $("#rollNumber").val().trim();

    if (!examType || !examYear) {
      alert("অনুগ্রহ করে পরীক্ষার নাম এবং বছর নির্বাচন করুন।");
      return;
    }

    // --- Simulation Logic ---
    // Hide both result areas initially
    $("#resultDisplayArea").hide();
    $("#institutionResultArea").hide();

    // Show a loading indicator (optional)
    // For example: $(this).find('button').html('<i class="fas fa-spinner fa-spin"></i>').prop('disabled', true);

    // Simulate an API call
    setTimeout(function () {
      // Restore button
      // $(this).find('button').html('<i class="fas fa-search"></i> ফলাফল দেখুন').prop('disabled', false);

      // If roll number is provided, show individual result
      if (rollNumber) {
        // Here you would typically fetch real data via AJAX
        // For this demo, we just show the hardcoded individual result
        if(rollNumber === "123456") { // Check if the roll is the demo roll
            $("#resultDisplayArea").slideDown(500);
        } else {
             // If roll is different, you can show a "not found" message
             alert("রোল নম্বর " + rollNumber + " এর জন্য কোন ফলাফল পাওয়া যায়নি।");
        }
      } else {
        // If no roll number, show the institution result table
        $("#institutionResultArea").slideDown(500);
      }
    }, 1000); // 1-second delay to simulate network request
  });

  // Force page reload when navigating back/forward for browsers that use bfcache
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});