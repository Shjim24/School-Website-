$(document).ready(function() {
    // --- Counter Up Animation ---
    const animateCounters = () => {
        const counters = $('.counter');
        if (counters.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = $(entry.target);
                    const target = +counter.text();
                    counter.text(0);
                    
                    let stepTime = 2000 / target;
                    if(target < 100) stepTime = 20;
                    if(target < 20) stepTime = 100;

                    let current = 0;
                    const timer = setInterval(() => {
                        current += 1;
                        counter.text(current);
                        if (current === target) {
                            clearInterval(timer);
                        }
                    }, stepTime);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.7 });

        counters.each(function() {
            observer.observe(this);
        });
    };
    
    // --- Scroll Animations ---
    const animateOnScroll = () => {
        const elements = $('.animate-on-scroll');
        if (elements.length === 0) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    $(entry.target).addClass('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.each(function() {
            observer.observe(this);
        });
    };

    // Initialize all functions
    animateCounters();
    animateOnScroll();
});