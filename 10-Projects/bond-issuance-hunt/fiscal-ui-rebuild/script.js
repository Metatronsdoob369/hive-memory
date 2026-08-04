document.addEventListener('DOMContentLoaded', () => {
    // 1. Search Input Clear Button Logic
    const searchInput = document.getElementById('query');
    const clearButton = document.querySelector('.fiscal-searchgov__clear');

    if (searchInput && clearButton) {
        // Show/hide clear button based on input value
        searchInput.addEventListener('input', () => {
            if (searchInput.value.length > 0) {
                clearButton.hidden = false;
            } else {
                clearButton.hidden = true;
            }
        });

        // Clear input when button is clicked
        clearButton.addEventListener('click', () => {
            searchInput.value = '';
            clearButton.hidden = true;
            searchInput.focus(); // Return focus to input for UX
        });
    }

    // 2. Dropdown Interaction Logic
    // Allow clicking outside the details element to close the dropdown
    const detailsElement = document.querySelector('details.fiscal-sites');
    
    if (detailsElement) {
        document.addEventListener('click', (event) => {
            const isClickInside = detailsElement.contains(event.target);
            if (!isClickInside && detailsElement.hasAttribute('open')) {
                // Close the dropdown with a slight fade out effect before removing the attribute
                const panel = detailsElement.querySelector('.fiscal-sites__panel');
                if (panel) {
                    panel.style.animation = 'fadeOutUp 0.2s forwards ease-in';
                    setTimeout(() => {
                        detailsElement.removeAttribute('open');
                        panel.style.animation = ''; // Reset animation
                    }, 200);
                } else {
                    detailsElement.removeAttribute('open');
                }
            }
        });

        // Prevent immediate close to allow for animation if possible
        detailsElement.addEventListener('toggle', (e) => {
             // We can expand toggle animations here if needed in the future
        });
    }
});
