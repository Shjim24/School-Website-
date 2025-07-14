$(document).ready(function () {
  // --- Scroll Animations ---
  const animateOnScroll = () => {
    const elements = $(".animate-on-scroll");
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a delay to each card animation for a staggered effect
            const delay = $(entry.target).index() * 150; // 150ms delay between cards
            setTimeout(() => {
              $(entry.target).addClass("visible");
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.each(function () {
      observer.observe(this);
    });
  };

  // Initialize the scroll animation
  animateOnScroll();
});
