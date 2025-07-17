$(document).ready(function () {
  // Bootstrap form validation
  const admissionForm = document.getElementById('admissionForm');

  if (admissionForm) {
    admissionForm.addEventListener('submit', function (event) {
      if (!admissionForm.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      admissionForm.classList.add('was-validated');
    }, false);
  }

  // Animate form on load
  $('.application-form-wrapper').addClass('animate__animated animate__fadeInUp');

  // Smooth scroll for internal links
  $('a[href*="#"]').on("click", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 80, // Adjust for sticky header
      },
      500,
      "linear"
    );
  });

  // Force page reload when navigating back/forward for browsers that use bfcache
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});