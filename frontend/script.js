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

// FAQ accordion behavior
document.addEventListener('DOMContentLoaded', () => {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach((btn) => {
    const answer = btn.nextElementSibling;

    // Ensure answers start hidden
    if (answer) {
      answer.hidden = true;
      answer.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }

    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      // Close all others (optional accordion behavior). Remove this loop if you want multiple open.
      questions.forEach((otherBtn) => {
        if (otherBtn !== btn) {
          const otherAnswer = otherBtn.nextElementSibling;
          if (otherAnswer) {
            otherBtn.setAttribute('aria-expanded', 'false');
            otherAnswer.classList.remove('open');
            otherAnswer.hidden = true;
          }
        }
      });

      // Toggle the clicked one
      btn.setAttribute('aria-expanded', String(!isOpen));
      if (answer) {
        if (isOpen) {
          answer.classList.remove('open');
          // allow animation to complete then hide from layout/AT
          setTimeout(() => { answer.hidden = true; }, 250);
        } else {
          answer.hidden = false;
          // force reflow so transition triggers when adding 'open'
          // eslint-disable-next-line no-unused-expressions
          answer.offsetHeight;
          answer.classList.add('open');
        }
      }
    });
  });
});

