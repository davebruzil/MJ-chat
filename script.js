console.log("Michael Jackson Chat Website Loaded");

const inputField = document.querySelector('input[type="text"]');
    const arrowButton = document.getElementById('arrow-up-btn');

    inputField.addEventListener('input', function() {
        if (inputField.value.length > 0) {
            // Show the arrow button when user types
            arrowButton.style.display = 'block';
            console.log("keyboard triggered");

        } else {
            // Hide the arrow button if the input is empty
            arrowButton.style.display = 'none';
        }
    });
    