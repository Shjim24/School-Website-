$(document).ready(function () {
  // --- Admission Results Page Specific Script ---

  // Dummy data for demonstration purposes
  const admissionResultsData = [
    {
      admissionRoll: "220101",
      name: "আরিফ হোসেন",
      status: "Selected",
      details: "আপনাকে অভিনন্দন! আপনি মেধাতালিকায় ৫ম স্থান অধিকার করেছেন।",
    },
    {
      admissionRoll: "B2050",
      name: "সুরাইয়া জাহান",
      status: "Selected",
      details:
        "আপনাকে অভিনন্দন! আপনি ভর্তির জন্য নির্বাচিত হয়েছেন। দয়া করে পরবর্তী নির্দেশনার জন্য অপেক্ষা করুন।",
    },
    {
      admissionRoll: "C3010",
      name: "ইমরান খান",
      status: "Waiting",
      details:
        "আপনি অপেক্ষমান তালিকায় ৩য় স্থানে আছেন। আসন খালি হওয়া সাপেক্ষে আপনাকে পরবর্তীতে জানানো হবে।",
    },
    {
      admissionRoll: "D4015",
      name: "ফাতেমা আক্তার",
      status: "Not Selected",
      details:
        "আমরা দুঃখিত যে এইবার আপনাকে নির্বাচিত করা সম্ভব হয়নি। আপনার ভবিষ্যৎ এর জন্য শুভকামনা রইল।",
    },
  ];

  $("#admission-result-form").on("submit", function (e) {
    e.preventDefault();

    const admissionRoll = $("#admission-roll").val().trim().toUpperCase();

    if (!admissionRoll) {
      alert("অনুগ্রহ করে আপনার ভর্তি রোল নম্বর দিন।");
      return;
    }

    // Simulate finding the result
    const result = admissionResultsData.find(
      (r) => r.admissionRoll === admissionRoll
    );

    const resultsDisplayArea = $("#results-display");
    const resultInfoContainer = $("#result-info");
    resultsDisplayArea.hide().fadeIn(500); // Fade in the results area
    resultInfoContainer.empty();

    if (result) {
      let statusClass, statusText, iconClass;

      switch (result.status) {
        case "Selected":
          statusClass = "selected";
          statusText = "অভিনন্দন, আপনি নির্বাচিত হয়েছেন!";
          iconClass = "fa-solid fa-award";
          break;
        case "Waiting":
          statusClass = "waiting";
          statusText = "আপনি অপেক্ষমান তালিকায় আছেন";
          iconClass = "fa-solid fa-clock";
          break;
        case "Not Selected":
          statusClass = "not-selected";
          statusText = "দুঃখিত, আপনি নির্বাচিত হননি";
          iconClass = "fa-solid fa-times-circle";
          break;
      }

      const resultHtml = `
        <div class="result-status-${statusClass}">
          <div class="result-icon">
            <i class="${iconClass}"></i>
          </div>
          <h3>${statusText}</h3>
          <p class="applicant-info">
            শিক্ষার্থীর নাম: <span>${result.name}</span><br>
            ভর্তি রোল: <span>${result.admissionRoll}</span>
          </p>
          <div class="details-message">
            ${result.details}
          </div>
        </div>
      `;
      resultInfoContainer.html(resultHtml);
    } else {
      const noResultHtml = `
        <div class="no-result-message">
           <i class="fas fa-exclamation-triangle"></i>
          <h4>কোন ফলাফল পাওয়া যায়নি</h4>
          <p>আপনার দেওয়া রোল নম্বরটি সঠিক নয়। অনুগ্রহ করে আবার চেষ্টা করুন।</p>
        </div>
      `;
      resultInfoContainer.html(noResultHtml);
    }
  });

  // Force page reload when navigating back/forward for browsers that use bfcache
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});