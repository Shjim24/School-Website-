$(document).ready(function () {
  // --- Chart.js Initialization for Gender Pie Chart ---

  const maleCount = parseInt($("#male-count").text());
  const femaleCount = parseInt($("#female-count").text());

  const ctx = document.getElementById("genderPieChart").getContext("2d");

  // Custom plugin to display text in the center of the doughnut chart
  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: (chart) => {
      const { width, height, ctx } = chart;
      ctx.restore();
      const fontSize = (height / 150).toFixed(2);
      ctx.font = `700 ${fontSize}em 'Anek Bangla', sans-serif`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";

      const total = chart.data.datasets[0].data.reduce(
        (a, b) => a + b,
        0
      );
      const text = `${((femaleCount / total) * 100).toFixed(1)}%`;
      const text2 = "ছাত্রী";
      const textX = Math.round(width / 2);
      const textY = Math.round(height / 2) - 15;

      ctx.fillStyle = "#e91e63"; // Female color
      ctx.fillText(text, textX, textY);
      ctx.font = `500 ${fontSize * 0.6}em 'Anek Bangla', sans-serif`;
      ctx.fillStyle = "#555";
      ctx.fillText(text2, textX, textY + 30);
      ctx.save();
    },
  };

  const genderPieChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["ছাত্র", "ছাত্রী"],
      datasets: [
        {
          label: "শিক্ষার্থীর সংখ্যা",
          data: [maleCount, femaleCount],
          backgroundColor: ["#2196f3", "#e91e63"],
          borderColor: ["#ffffff", "#ffffff"],
          borderWidth: 4,
          hoverOffset: 15,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "75%", // Adjust for thickness of the doughnut
      plugins: {
        legend: {
          display: true,
          position: "bottom",
          labels: {
            font: {
              family: "'Anek Bangla', sans-serif",
              size: 14,
            },
            color: "#333",
            padding: 20,
            usePointStyle: true,
          },
        },
        tooltip: {
          titleFont: { family: "'Anek Bangla', sans-serif" },
          bodyFont: { family: "'Anek Bangla', sans-serif" },
          callbacks: {
            label: function (context) {
              let label = context.label || "";
              if (label) {
                label += ": ";
              }
              if (context.parsed !== null) {
                label += context.parsed;
              }
              return label;
            },
          },
        },
        centerText: {}, // Enable custom plugin
      },
      animation: {
        animateScale: true,
        animateRotate: true,
      },
    },
    plugins: [centerTextPlugin], // Register custom plugin
  });

  // Animate stat cards on scroll
  function animateOnScroll() {
    $(".stat-card").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll + windowHeight * 0.9 > position) {
        $(this).addClass("visible");
      }
    });
  }

  // Add CSS for the animation
  $(
    "<style>.stat-card { opacity: 0; transform: translateX(50px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; } .stat-card.visible { opacity: 1; transform: translateX(0); }</style>"
  ).appendTo("head");

  $(window).on("scroll", animateOnScroll);
  animateOnScroll(); // Trigger on page load

  // Force page reload on back/forward navigation
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});