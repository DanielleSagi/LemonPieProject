document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    const output = document.getElementById('rating-output');

    create_starts_interactive();

    function create_starts_interactive() {
        var selectedRating = 0;
        stars.forEach(star => {
            star.addEventListener('click', () => {
                selectedRating = parseInt(star.getAttribute('data-value'));
                updateStars(selectedRating);
                fetch("/api/updateRating", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ value: selectedRating })
                })
                .then(data_from_server => {
                    if (!data_from_server.ok) {
                        output.textContent = 'Error contacting server';
                    }
                    else {
                        output.textContent = data_from_server.json().response;//המשתנה שהגדרנו בשרת
                    }
                })                
            });

            star.addEventListener('mouseover', () => {
                const currentHover = parseInt(star.getAttribute('data-value'));
                updateStars(currentHover);
            });

            star.addEventListener('mouseleave', () => {
                updateStars(selectedRating);
            });
        });
    }

    function updateStars(ratingValue) {
        stars.forEach(star => {
            const starValue = parseInt(star.getAttribute('data-value'));
            if (starValue <= ratingValue) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
});