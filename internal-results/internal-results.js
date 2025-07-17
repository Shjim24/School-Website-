$(document).ready(function () {
  // Dummy data to simulate a database.
  // In a real application, this would come from a server via an AJAX call.
  const dummyResults = {
    "2025": {
      "8": {
        "8001": {
          name: "আরিফ হোসেন",
          roll: 8001,
          class: "অষ্টম শ্রেণি",
          father: "মোঃ শফিকুর রহমান",
          gpa: "4.85",
          status: "pass",
          subjects: [
            { name: "বাংলা", grade: "A", marks: 85 },
            { name: "English", grade: "A+", marks: 92 },
            { name: "গণিত", grade: "A", marks: 88 },
            { name: "বিজ্ঞান", grade: "A-", marks: 75 },
            { name: "সমাজ বিজ্ঞান", grade: "A+", marks: 95 },
            { name: "ধর্ম", grade: "A", marks: 82 },
          ],
        },
        "8002": {
          name: "সুমি আক্তার",
          roll: 8002,
          class: "অষ্টম শ্রেণি",
          father: "আব্দুল করিম",
          gpa: "5.00",
          status: "pass",
          subjects: [
            { name: "বাংলা", grade: "A+", marks: 95 },
            { name: "English", grade: "A+", marks: 98 },
            { name: "গণিত", grade: "A+", marks: 100 },
            { name: "বিজ্ঞান", grade: "A+", marks: 94 },
            { name: "সমাজ বিজ্ঞান", grade: "A+", marks: 96 },
            { name: "ধর্ম", grade: "A+", marks: 90 },
          ],
        },
        "8003": {
          name: "জসিম উদ্দিন",
          roll: 8003,
          class: "অষ্টম শ্রেণি",
          father: "নজরুল ইসলাম",
          gpa: "2.75",
          status: "fail",
          subjects: [
            { name: "বাংলা", grade: "B", marks: 65 },
            { name: "English", grade: "C", marks: 55 },
            { name: "গণিত", grade: "F", marks: 28 },
            { name: "বিজ্ঞান", grade: "A-", marks: 71 },
            { name: "সমাজ বিজ্ঞান", grade: "B", marks: 68 },
            { name: "ধর্ম", grade: "C", marks: 52 },
          ],
        },
      },
    },
  };

  // Handle the search form submission
  $("#results-search-form").on("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const year = $("#examYear").val();
    const className = $("#className").val();
    const roll = $("#studentRoll").val();
    const resultDisplayArea = $("#results-display-area");

    // Clear previous results and show a loading indicator
    resultDisplayArea.html(
      `<div class="alert alert-info text-center">অনুসন্ধান করা হচ্ছে...</div>`
    );

    // Simulate a network delay
    setTimeout(function () {
      // Look for the result in the dummy data
      const resultData =
        dummyResults[year]?.[className]?.[roll] || null;

      if (resultData) {
        // If result is found, build the HTML
        const subjectsHtml = resultData.subjects
          .map(
            (sub) => `
          <tr>
            <td>${sub.name}</td>
            <td>${sub.marks}</td>
            <td>${sub.grade}</td>
          </tr>
        `
          )
          .join("");

        const resultStatusClass =
          resultData.status === "pass" ? "status-pass" : "status-fail";
        const resultStatusText =
          resultData.status === "pass" ? "কৃতকার্য" : "অকৃতকার্য";

        const resultHtml = `
          <div class="results-card animate__animated animate__fadeInUp">
            <div class="results-header">
              <h3>শিক্ষার্থীর মার্কশিট</h3>
              <span><strong>পরীক্ষার বছর:</strong> ${year}</span>
            </div>
            <div class="student-info">
              <div class="row">
                <div class="col-md-6">
                  <p><strong>শিক্ষার্থীর নাম:</strong> ${resultData.name}</p>
                  <p><strong>রোল নম্বর:</strong> ${resultData.roll}</p>
                </div>
                <div class="col-md-6">
                  <p><strong>পিতার নাম:</strong> ${resultData.father}</p>
                  <p><strong>শ্রেণি:</strong> ${resultData.class}</p>
                </div>
              </div>
            </div>
            <div class="table-responsive">
              <table class="table results-table table-striped table-hover">
                <thead class="table-light">
                  <tr>
                    <th>বিষয়</th>
                    <th>প্রাপ্ত নম্বর</th>
                    <th>গ্রেড</th>
                  </tr>
                </thead>
                <tbody>
                  ${subjectsHtml}
                </tbody>
              </table>
            </div>
            <div class="results-summary">
              <div class="summary-item">মোট গ্রেড পয়েন্ট (GPA): <span>${resultData.gpa}</span></div>
              <div class="summary-item ${resultStatusClass}">ফলাফল: <span>${resultStatusText}</span></div>
            </div>
          </div>
        `;
        resultDisplayArea.html(resultHtml);
        $(".results-card").show(); // Show the card after inserting it
      } else {
        // If no result is found, show an error message
        resultDisplayArea.html(
          `<div class="alert alert-danger text-center alert-custom">দুঃখিত, আপনার দেওয়া তথ্যের সাথে মিলে এমন কোনো ফলাফল পাওয়া যায়নি। অনুগ্রহ করে আপনার তথ্য যাচাই করে আবার চেষ্টা করুন।</div>`
        );
      }
    }, 1000); // 1-second delay
  });

  // Force page reload on back/forward navigation for bfcache handling
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});