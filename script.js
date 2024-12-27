// JavaScript to add sticky class to navbar when scrolling
window.onscroll = function() {
    var navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 100) { // When scroll is more than 100px
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
};

// Function to animate the counter
function animateCounter(elementId, start, end, duration) {
    const element = document.getElementById(elementId);
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        element.textContent = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Trigger the counter animation when the page loads
document.addEventListener("DOMContentLoaded", () => {
    animateCounter("experience-counter", 0, 3, 2000); // Animate from 0 to 5 over 2 seconds
});

// When the "Experience" navbar link is clicked
$(document).ready(function() {
    $('#experience-nav').on('click', function(event) {
        // Prevent the default action of the link (e.g., jumping to the section)
        event.preventDefault();

        // Scroll smoothly to the experience section with consistent speed
        $('html, body').animate({
            scrollTop: $('#experience').offset().top
        }, 10, 'linear', function() { // Use 'linear' for smooth consistent speed
            // Once the scroll is complete, start the counter animation
            animateCounter("experience-counter", 0, 3, 2000); // Animate from 0 to 5 over 2 seconds
        });
    });
});


// Trigger the counter animation when the page loads
document.addEventListener("DOMContentLoaded", () => {
    animateCounter("projects-counter", 0, 15, 2000); // Animate from 0 to 10 over 2 seconds
});

// When the "Projects" navbar link is clicked
$(document).ready(function() {
    $('#projects-nav').on('click', function(event) {
        // Prevent the default action of the link (e.g., jumping to the section)
        event.preventDefault();

        // Scroll smoothly to the projects section with consistent speed
        $('html, body').animate({
            scrollTop: $('#projects').offset().top
        }, 10, 'swing', function() {
            // Once the scroll is complete, start the counter animation
            animateCounter("projects-counter", 0, 15, 2000); // Animate from 0 to 10 over 2 seconds
        });
    });
});


// JavaScript to close the navbar after clicking a link on mobile
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const navbarToggler = document.querySelector('.navbar-toggler');

        // Check if the navbar is open and close it
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click(); // Simulate a click to close the menu
        }
    });
});
