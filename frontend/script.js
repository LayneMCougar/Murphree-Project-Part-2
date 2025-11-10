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
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      }
    });
  });
});

// Contact form submission alert
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevents page reload
      alert('Thank you for contacting us! Your message has been submitted successfully.');
      contactForm.reset(); // Clears the form after submission
    });
  }
});

// Room booking Availability checker ; check specific date/time and see if room is available
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('roomBookingForm');

  //Sample already booked room/ blocked out for the entire day on Nov 10, 2025
  const unavailableRooms = [{room: "eventHall", date: "2025-11-10", time: "ALL_DAY"}];

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const room = document.getElementById('room').value.trim();
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Ensure valid inputs
    if (!room || !date || !time) {
      alert('Please fill in all required fields.');
      return;
    }

    // Check availability for date
    const isBlocked = unavailableRooms.some(
      (booking) =>
        booking.room === room &&
        booking.date === date &&
        booking.time === "ALL_DAY"
    );

    if (isBlocked) {
      alert(`Sorry, ${room} is unavailable on ${date}. Please choose another date or room.`);
      return;
    }

    //If room available give message
    alert('Booking request submitted for ${room} on ${date} at ${time}.');
    form.reset();
  });
});