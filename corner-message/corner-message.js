// Corner Message Page Specific Scripts
$(document).ready(function() {
    // Make sure the navigation is updated for the current page
    $('.header-menu-list li a').removeClass('active');
    $('.header-menu-list li a[href="../about/about.html"]').parent().addClass('active');
    $('.header-menu-list li a[href="corner-message.html"]').addClass('active');

    // Animate message cards on scroll
    function animateCards() {
        $('.message-card').each(function() {
            var cardTop = $(this).offset().top;
            var windowBottom = $(window).scrollTop() + $(window).height();
            
            if (windowBottom > cardTop + 100) {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)',
                    'transition': 'all 0.6s ease-out'
                });
            }
        });
    }

    // Initial check in case cards are already in view
    animateCards();
    
    // Check on scroll
    $(window).on('scroll', animateCards);

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
                scrollTop: $($(this).attr('href')).offset().top - 80,
            },
            500,
            'linear'
        );
    });

    // Make message cards clickable to expand/collapse content on mobile
    if ($(window).width() < 768) {
        $('.message-header').on('click', function() {
            $(this).closest('.message-card').find('.message-content').slideToggle();
        });
        
        // Initially hide content on mobile
        $('.message-content').hide();
        $('.message-header').css('cursor', 'pointer');
    }

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