document.addEventListener('DOMContentLoaded', function () {
    function smoothScrollTo(element, duration) {
        const start = window.scrollY || 0; // Current scroll position
        const target = element.offsetTop; // Position of the target element
        const distance = target - start; // Distance to scroll
        let startTime = null;

        function scrollStep(timestamp) {
            if (!startTime) startTime = timestamp; // Store start time
            const progress = timestamp - startTime; // Time elapsed since start
            const scrollAmount = Math.min(progress / duration * distance, distance); // Calculate the amount to scroll

            window.scrollTo(0, start + scrollAmount); // Scroll to the calculated position

            if (progress < duration) {
                requestAnimationFrame(scrollStep); // Continue scrolling until the duration is reached
            }
        }

        requestAnimationFrame(scrollStep); // Start the scroll animation
    }

    document.querySelector('.btn-about-us').addEventListener('click', function () {
        const targetSection = document.querySelector('.background-section');
        smoothScrollTo(targetSection, 1000); // Adjust the duration (in ms) to control scroll speed
    });

    document.querySelector('#benefit_button').addEventListener('click', function () {
        const targetSection = document.querySelector('#feature_section'); // Select the Features Section
        smoothScrollTo(targetSection, 1000); // Smooth scroll with 1000ms duration
    });
});
