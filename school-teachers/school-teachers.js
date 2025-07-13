$(document).ready(function() {
    // Initialize teacher cards animation
    $('.teacher-card').each(function(index) {
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

    // Filter teachers
    $('#department-filter, #designation-filter').change(function() {
        // In a real implementation, this would filter the teachers
        console.log('Filtering teachers...');
        // You would typically make an AJAX call here or filter existing elements
    });

    // Teacher card hover effect
    $('.teacher-card').hover(
        function() {
            $(this).find('.teacher-image img').css('transform', 'scale(1.1)');
        },
        function() {
            $(this).find('.teacher-image img').css('transform', 'scale(1)');
        }
    );

    // Pagination click handler
    $('.pagination .page-link').click(function(e) {
        e.preventDefault();
        // In a real implementation, this would load the appropriate page
        console.log('Loading page...');
        
        // Remove active class from all pagination items
        $('.pagination .page-item').removeClass('active');
        
        // Add active class to clicked item
        $(this).parent().addClass('active');
    });

    // Force page reload when navigating back/forward
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
});