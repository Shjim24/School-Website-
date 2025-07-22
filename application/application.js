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

  // === IMAGE PREVIEW SCRIPT (NEW) === //
  const studentPhotoInput = document.getElementById('studentPhoto');
  const imagePreview = document.getElementById('imagePreview');

  if (studentPhotoInput && imagePreview) {
    studentPhotoInput.addEventListener('change', function (event) {
      const file = event.target.files[0];
      if (file) {
        // Check if the file is an image
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          
          reader.onload = function(e) {
            imagePreview.src = e.target.result;
          }
          
          reader.readAsDataURL(file);
        } else {
          // Reset if the file is not an image
          imagePreview.src = '../images/default-avatar.png'; // Or your default image path
          alert("Please select a valid image file (JPG, PNG).");
        }
      }
    });
  }
  // === END IMAGE PREVIEW SCRIPT === //

  // Animate form on load
  $('.application-form-wrapper').addClass('animate__animated animate__ fadeInUp');

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