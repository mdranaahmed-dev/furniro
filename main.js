$(document).ready(function() {
    // Mobile menu toggle
    $('.mobile-menu-icon').click(function() {
        $('.mobile-menu').addClass('active');
    });

    // Close mobile menu
    $('.mobile-menu__close').click(function() {
        $('.mobile-menu').removeClass('active');
    });
});