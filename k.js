// Example JavaScript for interactive pricing toggles
document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('.plan');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            toggles.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });
});
