$(document).ready(function() {
    
    // --- Initial animation for committee cards ---
    function animateCardsOnLoad() {
        $('.committee-member-card').each(function(index) {
            // Initially hide the card
            $(this).css({
                'opacity': '0',
                'transform': 'translateY(40px)',
                'transition': 'opacity 0.6s ease-out, transform 0.6s ease-out'
            });

            // Reveal the card with a staggered delay
            setTimeout(() => {
                $(this).css({
                    'opacity': '1',
                    'transform': 'translateY(0)'
                });
            }, index * 100); 
        });
    }
    
    // Run the initial animation
    animateCardsOnLoad();

    // --- Filter logic for committee members ---
    function filterCommitteeMembers() {
        const positionFilter = $('#position-filter').val();
        // const typeFilter = $('#type-filter').val(); // For future implementation

        $('.committee-member-card').each(function() {
            const memberPosition = $(this).data('position');
            
            // Check if the card matches the selected position filter
            const positionMatch = (positionFilter === "" || positionFilter === memberPosition);

            // In a real application, you would also check the type match
            // const typeMatch = (typeFilter === "" || $(this).data('type') === typeFilter);
            
            if (positionMatch) {
                $(this).fadeIn(300); // Show matching cards
            } else {
                $(this).fadeOut(300); // Hide non-matching cards
            }
        });
    }

    // --- Event Handlers ---
    
    // Trigger filtering when a select dropdown changes
    $('#position-filter, #type-filter').change(function() {
        filterCommitteeMembers();
    });

    // Prevent form submission which reloads the page
    $('.committee-filter-form form').submit(function(e) {
        e.preventDefault();
        filterCommitteeMembers();
    });

    // Handle pagination click
    $('.pagination .page-link').click(function(e) {
        e.preventDefault();
        // Prevent action if the item is disabled or active
        if ($(this).parent().hasClass('disabled') || $(this).parent().hasClass('active')) {
            return;
        }

        const page = $(this).text();
        console.log('Loading page:', page); 
        
        $('.pagination .page-item').removeClass('active');
        $(this).parent().addClass('active');
        
        // NOTE: In a real implementation, this is where you would use AJAX
        // to load the content for the selected page and then re-run animations.
    });

    // Force a page reload on back/forward navigation to ensure scripts re-run
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
});