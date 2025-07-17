$(document).ready(function () {
  // Dummy data for demonstration. In a real application, this would come from a server/API.
  const allResults = [
    { roll: 101, name: "আবির হাসান", father: "মো: করিম শেখ", gpa: 5.0, result: "উত্তীর্ণ", exam: "বার্ষিক পরীক্ষা", class: "দশম", year: 2024 },
    { roll: 102, name: "ফারিয়া ইসলাম", father: "মো: রহিম উদ্দিন", gpa: 4.88, result: "উত্তীর্ণ", exam: "বার্ষিক পরীক্ষা", class: "দশম", year: 2024 },
    { roll: 103, name: "সিয়াম আহমেদ", father: "মো: জামাল হোসেন", gpa: 5.0, result: "উত্তীর্ণ", exam: "বার্ষিক পরীক্ষা", class: "দশম", year: 2024 },
    { roll: 105, name: "সুমাইয়া আক্তার", father: "মো: কামাল প্রধান", gpa: 4.95, result: "উত্তীর্ণ", exam: "বার্ষিক পরীক্ষা", class: "দশম", year: 2024 },
    { roll: 106, name: "মেহেদী হাসান", father: "মো: আব্দুল্লাহ", gpa: 4.75, result: "উত্তীর্ণ", exam: "বার্ষিক পরীক্ষা", class: "দশম", year: 2024 },
    { roll: 107, name: "নাবিলা রহমান", father: "মো: শফিক ইসলাম", gpa: 5.0, result: "উত্তীর্ণ", exam: "বার্ষিক পরীক্ষা", class: "দশম", year: 2024 },
    { roll: 108, name: "রাফসান চৌধুরী", father: "মো: বশির চৌধুরী", gpa: 4.8, result: "উত্তীর্ণ", exam: "বার্ষিক পরীক্ষা", class: "দশম", year: 2024 },
    { roll: 201, name: "আরিফ খান", father: "মো: জসিম খান", gpa: 4.5, result: "উত্তীর্ণ", exam: "নির্বাচনী", class: "একাদশ", year: 2023 },
    { roll: 202, name: "সাদিয়া জান্নাত", father: "মো: আনোয়ার মিয়া", gpa: 4.9, result: "উত্তীর্ণ", exam: "নির্বাচনী", class: "একাদশ", year: 2023 },
    { roll: 301, name: "ইমরান হোসেন", father: "মো: ইদ্রিস আলী", gpa: 5.0, result: "উত্তীর্ণ", exam: "এসএসসি", class: "দশম", year: 2025 },
  ];

  // Function to render the results table
  function renderTable(results) {
    const tableBody = $("#passListTableBody");
    tableBody.empty(); // Clear existing rows

    if (results.length === 0) {
        tableBody.append('<tr><td colspan="5" class="text-center">কোনো ফলাফল পাওয়া যায়নি।</td></tr>');
        return;
    }

    results.forEach(student => {
      const row = `
        <tr>
          <td>${student.roll}</td>
          <td>${student.name}</td>
          <td>${student.father}</td>
          <td>${student.gpa.toFixed(2)}</td>
          <td><span class="badge bg-success">${student.result}</span></td>
        </tr>
      `;
      tableBody.append(row);
    });
  }

  // Handle form submission for filtering
  $("#passListFilterForm").on("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Get filter values
    const examType = $("#examType").val();
    const className = $("#className").val();
    const examYear = $("#examYear").val();

    // Filter the data
    const filteredResults = allResults.filter(student => {
      return (
        (examType === "all" || student.exam === examType) &&
        (className === "all" || student.class === className) &&
        (examYear === "all" || student.year == examYear)
      );
    });
    
    // Update table title
    let title = `${examType === 'all' ? 'সকল পরীক্ষা' : examType} - ${examYear === 'all' ? 'সকল বছর' : examYear} : ${className === 'all' ? 'সকল শ্রেণি' : className}`;
    $('.table-title').text(title);


    // Re-render the table with filtered results
    renderTable(filteredResults);
  });
  
   // Initial table render on page load
   // For the initial view, we are showing the default data from the HTML.
   // You could also trigger a default filter here, for example:
   // renderTable(allResults.filter(r => r.year === 2024 && r.class === "দশম"));
   // But for now, we'll just leave the static HTML content as the default view.

  // Force page reload when navigating back/forward for browsers that use bfcache
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});