
document.addEventListener('DOMContentLoaded', function() {
    // Get all theme buttons
    const themeButtons = document.querySelectorAll('.theme-button');
    // Get the stylesheet link element
    const themeStylesheet = document.getElementById('css-theme');

    // Function to set active theme
    function setActiveTheme(themeName) {
        // Update stylesheet href
        themeStylesheet.href = `styles/${themeName}.css`;

        // Update active button state
        themeButtons.forEach(button => {
            if (button.dataset.theme === themeName) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });

        // Save preference to localStorage
        localStorage.setItem('preferredTheme', themeName);
    }

    // Add click event to all theme buttons
    themeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const themeName = this.dataset.theme;
            setActiveTheme(themeName);
        });
    });

    // Check if there's a saved theme preference
    const savedTheme = localStorage.getItem('preferredTheme');
    if (savedTheme) {
        setActiveTheme(savedTheme);
    }
});