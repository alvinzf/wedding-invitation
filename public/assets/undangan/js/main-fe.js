document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer
    const weddingDate = new Date('May 8, 2027 08:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;

        // Time calculations
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display countdown
        if (document.getElementById('days')) {
            document.getElementById('days').innerHTML = days;
        }
        if (document.getElementById('hours')) {
            document.getElementById('hours').innerHTML = hours;
        }
        if (document.getElementById('minutes')) {
            document.getElementById('minutes').innerHTML = minutes;
        }
        if (document.getElementById('seconds')) {
            document.getElementById('seconds').innerHTML = seconds;
        }
    }

    // Update countdown every second
    updateCountdown();
    setInterval(updateCountdown, 1000);

    // RSVP Form Validation
    const rsvpForm = document.getElementById('rsvpForm');
    if (rsvpForm) {
        rsvpForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const attendance = document.querySelector('input[name="attendance"]:checked').value;
            const guests = document.getElementById('guests').value;

            // Here you would send form data to server
            // For demo purposes, we'll just show an alert
            alert(`Thank you, ${name}! Your RSVP has been recorded. Attendance: ${attendance}, Guests: ${guests}`);

            // Reset form
            rsvpForm.reset();
        });
    }

    // Wishes Form Validation
    const wishesForm = document.getElementById('wishesForm');
    if (wishesForm) {
        wishesForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('wishName').value;
            const message = document.getElementById('wishMessage').value;

            // Here you would send form data to server
            // For demo purposes, we'll create and append a new wish

            const wishesContainer = document.querySelector('.wishes-container');
            const newWish = document.createElement('div');
            newWish.className = 'wish-item';

            const firstLetter = name.charAt(0).toUpperCase();

            newWish.innerHTML = `
                <div class="wish-header">
                    <div class="wish-avatar">${firstLetter}</div>
                    <div>
                        <div class="wish-name">${name}</div>
                        <div class="wish-date">Just now</div>
                    </div>
                </div>
                <div class="wish-message">${message}</div>
            `;

            wishesContainer.prepend(newWish);

            // Reset form
            wishesForm.reset();
        });
    }

    // Character counter for wishes
    const wishMessage = document.getElementById('wishMessage');
    const charCount = document.getElementById('charCount');

    if (wishMessage && charCount) {
        wishMessage.addEventListener('input', function() {
            const remaining = 300 - this.value.length;
            charCount.textContent = remaining;

            if (remaining < 0) {
                charCount.classList.add('text-danger');
                wishMessage.classList.add('is-invalid');
            } else {
                charCount.classList.remove('text-danger');
                wishMessage.classList.remove('is-invalid');
            }
        });
    }

    // E-Angpao handling
    const giftForm = document.getElementById('giftForm');
    if (giftForm) {
        giftForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const amount = document.getElementById('giftAmount').value;
            const anonymous = document.getElementById('anonymous').checked;

            // Here you would process the gift submission
            // For demo purposes, we'll just show a thank you message

            const thankYouModal = new bootstrap.Modal(document.getElementById('thankYouModal'));
            thankYouModal.show();

            // Reset form
            giftForm.reset();
        });
    }
});
