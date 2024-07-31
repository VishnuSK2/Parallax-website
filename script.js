// Simple parallax effect on scroll
window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;

    document.querySelectorAll('.parallax-section').forEach(function(section) {
        var speed = section.getAttribute('data-speed');
        var yPos = -(scrolled * speed / 100);
        section.style.backgroundPosition = 'center ' + yPos + 'px';
    });
});
    