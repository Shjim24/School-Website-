$(document).ready(function () {
  // Initialize FancyBox for the playground gallery
  $('[data-fancybox="playground-gallery"]').fancybox({
    buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close",
    ],
    loop: true,
    protect: true,
  });
});