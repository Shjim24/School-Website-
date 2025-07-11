// School Information Page Specific Scripts
$(document).ready(function() {
    // Make sure the navigation is updated for the current page
    $('.header-menu-list li a').removeClass('active');
    $('.header-menu-list li a[href="../about/about.html"]').parent().addClass('active');
    $('.header-menu-list li a[href="school-information.html"]').addClass('active');

    // Initialize Fancybox for gallery
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
        loop: true,
        protect: true
    });

    // Mobile menu toggle
    $('.mobile-menu-btn').click(function() {
        $('.navigation').toggleClass('active');
        $('.mobile-menu-overlay').toggleClass('active');
    });

    $('.mobile-menu-overlay').click(function() {
        $('.navigation').removeClass('active');
        $('.mobile-menu-overlay').removeClass('active');
    });

    // Smooth scroll for anchor links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        
        $('html, body').animate(
            {
                scrollTop: $($(this).attr('href')).offset().top,
            },
            500,
            'linear'
        );
    });

    // Notice ticker animation
    function animateNoticeTicker() {
        const ticker = $('.scrolling-text');
        const textWidth = ticker.width();
        const containerWidth = ticker.parent().width();
        
        if (textWidth > containerWidth) {
            const duration = (textWidth / 50) * 1000; // Adjust speed as needed
            
            ticker.css({
                'transition': 'none',
                'transform': 'translateX(0)'
            });
            
            setTimeout(function() {
                ticker.css({
                    'transition': 'transform ' + (duration/1000) + 's linear',
                    'transform': 'translateX(-' + (textWidth - containerWidth) + 'px)'
                });
            }, 100);
            
            // Reset animation when it completes
            setTimeout(function() {
                ticker.css({
                    'transition': 'none',
                    'transform': 'translateX(0)'
                });
                setTimeout(animateNoticeTicker, 100);
            }, duration);
        }
    }
    
    // Start the ticker animation
    animateNoticeTicker();
    
    // Back to top button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.progress-wrap').addClass('active-progress');
        } else {
            $('.progress-wrap').removeClass('active-progress');
        }
    });
    
    $('.progress-wrap').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
    });
});