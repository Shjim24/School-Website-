$(document).ready(function() {
    // Initialize committee cards animation
    $('.committee-card').each(function(index) {
        $(this).css({
            'opacity': '0',
            'transform': 'translateY(30px)'
        });
        
        setTimeout(() => {
            $(this).animate({
                'opacity': '1',
                'transform': 'translateY(0)'
            }, 500);
        }, index * 150);
    });

    // Filter committee members
    $('#position-filter, #type-filter').change(function() {
        const position = $('#position-filter').val();
        const type = $('#type-filter').val();
        
        $('.committee-card').each(function() {
            const cardPosition = $(this).find('.committee-badge').text().trim();
            const matchesPosition = !position || 
                (position === 'president' && cardPosition === 'সভাপতি') ||
                (position === 'vice-president' && cardPosition === 'সহ-সভাপতি') ||
                (position === 'secretary' && cardPosition === 'সেক্রেটারী') ||
                (position === 'member' && cardPosition === 'সদস্য');
            
            const matchesType = !type; // In real implementation, you'd check committee type
            
            if (matchesPosition && matchesType) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });

    // Committee card hover effect
    $('.committee-card').hover(
        function() {
            $(this).find('.committee-image img').css('transform', 'scale(1.1)');
        },
        function() {
            $(this).find('.committee-image img').css('transform', 'scale(1)');
        }
    );

    // Pagination click handler
    $('.pagination .page-link').click(function(e) {
        e.preventDefault();
        const page = $(this).text();
        console.log('Loading page', page);
        
        $('.pagination .page-item').removeClass('active');
        $(this).parent().addClass('active');
        
        // In real implementation, you would load the appropriate page content
    });

    // Force page reload when navigating back/forward
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
});