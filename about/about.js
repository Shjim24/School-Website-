$(document).ready(function() {
    // Animate timeline items on scroll
    $('.timeline-container').each(function() {
        $(this).css('opacity', '0');
    });

    $(window).scroll(function() {
        $('.timeline-container').each(function() {
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            
            if (scroll + windowHeight * 0.7 > position) {
                $(this).animate({
                    opacity: 1
                }, 800); 
            }
        });
    });

    // Trigger scroll event on page load
    $(window).trigger('scroll');

    // Smooth scroll for internal links
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

    // Fancybox gallery initialization
    $('[data-fancybox="school-gallery"]').fancybox({
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

    // Mission/Vision cards animation
    $('.mv-card').each(function(index) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(50px)'
        });
        
        setTimeout(() => {
            $(this).animate({
                'opacity': '1',
                'transform': 'translateY(0)'
            }, 800);
        }, index * 200);
    });

    // Facilities cards animation
    $('.facility-card').each(function(index) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(50px)'
        });
        
        setTimeout(() => {
            $(this).animate({
                'opacity': '1',
                'transform': 'translateY(0)'
            }, 800);
        }, index * 150);
    });

    // Gallery items animation
    $('.gallery-item').each(function(index) {
        $(this).css({
            'opacity': '0',
            'transform': 'scale(0.8)'
        });
        
        setTimeout(() => {
            $(this).animate({
                'opacity': '1',
                'transform': 'scale(1)'
            }, 800);
        }, index * 100);
    });

    // Force page reload when navigating back/forward
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
});