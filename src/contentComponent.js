    document.addEventListener("DOMContentLoaded", function () {
        const thirdPoster = document.querySelector('.poster:nth-child(3)');
        const allSections = document.querySelectorAll('.rectangle section');

        // Get the bounding rectangle of the third poster
        let previousElementBottom = thirdPoster.getBoundingClientRect().bottom + 50;

        allSections.forEach(section => {
            section.style.position = 'absolute';
            section.style.top = `${previousElementBottom}px`;
            section.style.left = '0';
            section.style.right = '0';
            section.style.margin = '0 auto';

            // Update the previousElementBottom for the next section
            previousElementBottom += section.offsetHeight + 50;
        });
    });