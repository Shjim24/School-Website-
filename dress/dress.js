$(document).ready(function () {
  "use strict";

  // Preloader
  $(window).on("load", function () {
    $("#preloader").fadeOut("slow");
  });

  // Back to Top
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      $(".progress-wrap").addClass("active-progress");
    } else {
      $(".progress-wrap").removeClass("active-progress");
    }
  });
  $(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });

  // Notice Ticker
  // This is a simple implementation. For a real-world scenario,
  // you might use a more robust plugin or fetch notices dynamically.
  const scrollingText = $(".scrolling-text");
  if (scrollingText.length) {
    const noticeWidth = scrollingText.width();
    const containerWidth = $(".notice-ticker").width();

    function animateNotice() {
      scrollingText.css({ transform: "translateX(" + containerWidth + "px)" });
      scrollingText.animate(
        { transform: "translateX(-" + noticeWidth + "px)" },
        15000, // Adjust speed as needed
        "linear",
        animateNotice
      );
    }
    animateNotice();
  }

  // Mobile Menu
  $(".mobile-menu-btn").on("click", function () {
    $("body").addClass("mobile-menu-active");
    $(".mobile-menu-overlay").fadeIn();
    $(".navigation").addClass("off-canvas-menu");
  });

  $(".mobile-menu-overlay").on("click", function () {
    $("body").removeClass("mobile-menu-active");
    $(".mobile-menu-overlay").fadeOut();
    $(".navigation").removeClass("off-canvas-menu");
  });

  // Submenu Handling in Mobile
  if ($(window).width() < 992) {
    $(".header-menu-list li a").each(function () {
      if ($(this).next().length > 0) {
        $(this).addClass("has-submenu");
      }
    });

    $(".has-submenu").on("click", function (e) {
      e.preventDefault();
      $(this).next(".sub-menu").slideToggle();
      $(this).parent().toggleClass("submenu-opened");
    });
  }

  // Sticky Header
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 50) {
      $(".header-area").addClass("sticky");
    } else {
      $(".header-area").removeClass("sticky");
    }
  });

  // Owl Carousel (Example for potential use)
  // Check if a specific carousel exists before initializing
  if ($(".testimonial-carousel").length) {
    $(".testimonial-carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      dots: true,
      autoplay: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 3,
        },
      },
    });
  }

  // Magnific Popup (for galleries)
  if ($(".gallery-item").length) {
    $(".gallery-item").magnificPopup({
      type: "image",
      gallery: {
        enabled: true,
      },
    });
  }

  // CounterUp
  if ($(".counter-number").length) {
    $(".counter-number").counterUp({
      delay: 10,
      time: 1000,
    });
  }
});