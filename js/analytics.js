function initializeAnalytics() {
    document.querySelectorAll('a[data-track][href^="tel:"]').forEach((link) => {
        link.addEventListener('click', () => {
            gtag('event', 'phone_click', {
                button_location: link.dataset.track,
                button_text: link.textContent.trim()
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeAnalytics);