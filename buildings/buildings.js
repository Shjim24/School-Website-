$(document).ready(function () {
  // Animate building items on scroll
  function animateOnScroll() {
    $(".animate-on-scroll").each(function () {
      var position = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (scroll + windowHeight * 0.85 > position) {
        $(this).addClass("is-visible");
      }
    });
  }

  $(window).on("scroll", animateOnScroll);
  animateOnScroll(); // Trigger on page load

  // Fancybox gallery initialization for the buildings page
  $('[data-fancybox="building-gallery"]').fancybox({
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close",
    ],
    loop: true, // Allows looping through gallery images
    protect: true, // Protects images from being downloaded
    transitionEffect: "slide",
    infobar: true,
    afterLoad: function (instance, current) {
      console.log("Image loaded:", current.src);
    },
  });

  // Smooth scroll for any internal links if needed
  $('a[href*="#"]').on("click", function (e) {
    // Check if the link is actually on this page
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        e.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 80, // Adjust for sticky header
          },
          500,
          "linear"
        );
      }
    }
  });

  // Force page reload when navigating back/forward for browsers that use bfcache
  window.onpageshow = function (event) {
    if (event.persisted) {
      window.location.reload();
    }
  };
});