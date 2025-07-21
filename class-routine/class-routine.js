/* =================================================================
   YOUR FULL ORIGINAL JAVASCRIPT
   (Contains all scripts for sliders, preloader, back-to-top, etc.)
   ================================================================= */
$(document).ready(function () {
  // Preloader
  $(window).on("load", function () {
    $("#preloader")
      .delay(500)
      .fadeOut("slow", function () {
        $(this).remove();
      });
  });

  // --- Smooth fade-in on page load ---
  $("body").addClass("fade-in");

  // --- Smooth page transition for internal links ---
  $("a").on("click", function (e) {
    var href = $(this).attr("href");
    if (
      href &&
      href !== "#" &&
      !href.startsWith("#") &&
      !href.startsWith("mailto:") &&
      !href.startsWith("tel:") &&
      $(this).attr("target") !== "_blank" &&
      !$(this).data("fancybox")
    ) {
      e.preventDefault();
      $("body").removeClass("fade-in");
      setTimeout(function () {
        window.location.href = href;
      }, 500);
    }
  });

  // Back to Top
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > offset) {
      $(".progress-wrap").addClass("active-progress");
      $(".header-area").addClass("sticky");
    } else {
      $(".progress-wrap").removeClass("active-progress");
      $(".header-area").removeClass("sticky");
    }
  });
  $("html, body").css({ "scroll-behavior": "smooth" });
  $(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });

  // All Owl Carousel Sliders
  $(".hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    animateOut: "fadeOut",
    items: 1,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  });
  $(".leaders-slider").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    autoplay: true,
    items: 1,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  });
  $(".teachers-slider, .committee-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 4 } },
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  });
  $(".parents-slider, .students-slider").owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots: true,
    autoplay: true,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 992: { items: 3 } },
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  });

  // Counter Up
  $(".counter-number").counterUp({ delay: 10, time: 1000 });

  // FancyBox
  $('[data-fancybox="gallery"]').fancybox({
    buttons: ["zoom", "share", "slideShow", "fullScreen", "download", "thumbs", "close"],
    loop: true,
  });

  // Mobile Menu Toggle
  $(".mobile-menu-btn").click(function () {
    $(".navigation").toggleClass("active");
    $(".mobile-menu-overlay").toggleClass("active");
  });
  $(".mobile-menu-overlay").click(function () {
    $(".navigation").removeClass("active");
    $(".mobile-menu-overlay").removeClass("active");
  });

  /* ===============================================
    DYNAMIC CLASS ROUTINE SCRIPT (APPEND AT THE END)
   =============================================== */
  // --- Check if we are on the routine page to run this script ---
  if ($("#view-routine-btn").length) {
    // 1. Store all routine data in a structured object
    const routineData = {
      "10": {
        Morning: {
          A: {
            title: "দশম শ্রেণির রুটিন (প্রভাতি, ক শাখা)",
            schedule: [
              { time: "১০:০০ - ১০:৪৫", sat: "বাংলা ১ম পত্র", sun: "গণিত", mon: "ইংরেজি ১ম পত্র", tue: "পদার্থবিজ্ঞান", wed: "রসায়ন", thu: "জীববিজ্ঞান" },
              { time: "১০:৪৫ - ১১:৩০", sat: "বাংলা ২য় পত্র", sun: "গণিত", mon: "ইংরেজি ২য় পত্র", tue: "পদার্থবিজ্ঞান", wed: "রসায়ন", thu: "জীববিজ্ঞান" },
              { time: "১১:৩০ - ১২:১৫", sat: "বাংলাদেশ ও বিশ্বপরিচয়", sun: "তথ্য ও যোগাযোগ প্রযুক্তি", mon: "ইসলাম শিক্ষা", tue: "বাংলাদেশ ও বিশ্বপরিচয়", wed: "তথ্য ও যোগাযোগ প্রযুক্তি", thu: "ইসলাম শিক্ষা" },
              { time: "১২:১৫ - ০১:০০", sat: "বিরতি", sun: "বিরতি", mon: "বিরতি", tue: "বিরতি", wed: "বিরতি", thu: "বিরতি" },
              { time: "০১:০০ - ০১:৪৫", sat: "উচ্চতর গণিত", sun: "কৃষি শিক্ষা", mon: "শারীরিক শিক্ষা", tue: "উচ্চতর গণিত", wed: "কৃষি শিক্ষা", thu: "শারীরিক শিক্ষা" },
              { time: "০১:৪৫ - ০২:৩০", sat: "উচ্চতর গণিত", sun: "কৃষি শিক্ষা", mon: "চারু ও কারুকলা", tue: "উচ্চতর গণিত", wed: "কৃষি শিক্ষা", thu: "চারু ও কারুকলা" },
            ],
          },
          B: {
            title: "দশম শ্রেণির রুটিন (প্রভাতি, খ শাখা)",
            schedule: [
              { time: "১০:০০ - ১০:৪৫", sat: "গণিত", sun: "বাংলা ১ম পত্র", mon: "রসায়ন", tue: "ইংরেজি ১ম পত্র", wed: "পদার্থবিজ্ঞান", thu: "তথ্য ও যোগাযোগ প্রযুক্তি" },
              { time: "১০:৪৫ - ১১:৩০", sat: "গণিত", sun: "বাংলা ২য় পত্র", mon: "রসায়ন", tue: "ইংরেজি ২য় পত্র", wed: "পদার্থবিজ্ঞান", thu: "জীববিজ্ঞান" },
            ],
          },
        },
        Day: {
          A: {
            title: "দশম শ্রেণির রুটিন (দিবা, ক শাখা)",
            schedule: [
              { time: "০১:০০ - ০১:৪৫", sat: "পদার্থবিজ্ঞান", sun: "রসায়ন", mon: "জীববিজ্ঞান", tue: "গণিত", wed: "বাংলা", thu: "ইংরেজি" },
            ],
          },
        },
      },
      "9": {
        Morning: {
          A: {
            title: "নবম শ্রেণির রুটিন (প্রভাতি, ক শাখা)",
            schedule: [
              { time: "১০:০০ - ১০:৪৫", sat: "কৃষি শিক্ষা", sun: "গণিত", mon: "ইংরেজি ১ম পত্র", tue: "বিজ্ঞান", wed: "বাংলা ১ম পত্র", thu: "ইসলাম শিক্ষা" },
              { time: "১০:৪৫ - ১১:৩০", sat: "শারীরিক শিক্ষা", sun: "গণিত", mon: "ইংরেজি ২য় পত্র", tue: "বিজ্ঞান", wed: "বাংলা ২য় পত্র", thu: "বাংলাদেশ ও বিশ্বপরিচয়" },
            ],
          },
        },
      },
      "8": {
        Day: {
          B: {
            title: "অষ্টম শ্রেণির রুটিন (দিবা, খ শাখা)",
            schedule: [
              { time: "০১:০০ - ০১:৪৫", sat: "বাংলা ১ম পত্র", sun: "গণিত", mon: "ইংরেজি", tue: "বিজ্ঞান", wed: "ইসলাম শিক্ষা", thu: "কৃষি শিক্ষা" },
              { time: "০১:৪৫ - ০২:৩০", sat: "বাংলা ২য় পত্র", sun: "গণিত", mon: "ইংরেজি", tue: "বিজ্ঞান", wed: "বাংলাদেশ ও বিশ্বপরিচয়", thu: "তথ্য ও যোগাযোগ প্রযুক্তি" },
            ],
          },
        },
      },
    };

    // 2. Handle the button click event
    $("#view-routine-btn").on("click", function () {
      const selectedClass = $("#class-select").val();
      const selectedShift = $("#shift-select").val();
      const selectedSection = $("#section-select").val();
      const routineContainer = $("#routine-container");

      const routine = routineData[selectedClass]?.[selectedShift]?.[selectedSection];

      if (routine) {
        // 3. If routine is found, generate the HTML table
        let tableHTML = `
            <h3 class="text-center mb-4">${routine.title}</h3>
            <table class="table table-bordered routine-table">
              <thead>
                <tr>
                  <th>সময়</th>
                  <th>শনিবার</th>
                  <th>রবিবার</th>
                  <th>সোমবার</th>
                  <th>মঙ্গলবার</th>
                  <th>বুধবার</th>
                  <th>বৃহস্পতিবার</th>
                </tr>
              </thead>
              <tbody>
        `;

        routine.schedule.forEach((slot) => {
          if (slot.sat === "বিরতি") {
            tableHTML += `
              <tr class="table-secondary">
                <td class="time-slot">${slot.time}</td>
                <td colspan="6"><strong>${slot.sat}</strong></td>
              </tr>
            `;
          } else {
            tableHTML += `
              <tr>
                <td class="time-slot">${slot.time}</td>
                <td>${slot.sat || ""}</td>
                <td>${slot.sun || ""}</td>
                <td>${slot.mon || ""}</td>
                <td>${slot.tue || ""}</td>
                <td>${slot.wed || ""}</td>
                <td>${slot.thu || ""}</td>
              </tr>
            `;
          }
        });

        tableHTML += `</tbody></table>`;
        routineContainer.html(tableHTML);
      } else {
        // 4. If no routine is found, show a user-friendly error message
        const errorMessage = `
            <div class="error-message">
                <p>দুঃখিত, আপনার নির্বাচিত শ্রেণি, শিফট এবং শাখার জন্য কোনও রুটিন পাওয়া যায়নি। <br>অনুগ্রহ করে অন্য একটি নির্বাচন চেষ্টা করুন।</p>
            </div>
        `;
        routineContainer.html(errorMessage);
      }
    });
  }
}); // End of $(document).ready()