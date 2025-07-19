$(document).ready(function () {
  // Animate cards on scroll
  function animateCardsOnScroll() {
    $(".contact-card").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      // Animate when the card is 85% into the viewport
      if (scroll + windowHeight * 0.85 > position) {
        $(this).addClass("visible");
      }
    });
  }

  // Add CSS for the animation
  $(
    "<style>.contact-card { opacity: 0; transform: translateY(40px); transition: opacity 0.6s ease-out, transform 0.6s ease-out; } .contact-card.visible { opacity: 1; transform: translateY(0); }</style>"
  ).appendTo("head");

  // Initial and scroll-triggered animations
  $(window).on("scroll", animateCardsOnScroll);
  animateCardsOnScroll(); // Trigger on page load

  // Contact Form Submission
  $("#contact-form").on("submit", function (e) {
    // Prevent the default form submission
    e.preventDefault();

    // Basic validation
    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var subject = $("#subject").val().trim();
    var message = $("#message").val().trim();
    var hasError = false;

    if (name === "") {
      alert("অনুগ্রহ করে আপনার নাম লিখুন।");
      hasError = true;
    } else if (email === "") {
      alert("অনুগ্রহ করে আপনার ইমেইল ঠিকানা লিখুন।");
      hasError = true;
    } else if (subject === "") {
      alert("অনুগ্রহ করে একটি বিষয় লিখুন।");
      hasError = true;
    } else if (message === "") {
      alert("অনুগ্রহ করে আপনার বার্তা লিখুন।");
      hasError = true;
    }

    if (!hasError) {
      // Here you would typically send the form data to a server using AJAX
      // For this example, we'll just show a success message and clear the form
      alert("আপনার বার্তা সফলভাবে প্রেরণ করা হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।");
      // Clear the form fields
      $("#contact-form")[0].reset();
    }
  });

  // Force page reload when navigating back/forward for browsers that use bfcache
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});