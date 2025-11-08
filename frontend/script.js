// script.js
// JavaScript for collapsible FAQ sections

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select all FAQ question elements
    const faqItems = document.querySelectorAll('.faq-question');

    // Add click event to toggle each answer
    faqItems.forEach(item => {
        item.addEventListener('click', () => {
            // Toggle active class for styling
            item.classList.toggle('active');

            // Toggle maxHeight for the answer div
            const answer = item.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
});
