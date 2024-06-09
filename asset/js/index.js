const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
function toggleModalDarkMode() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (prefersDarkScheme.matches) {
            modal.classList.add('dark-mode');
        } else {
            modal.classList.remove('dark-mode');
        }
    });
}
window.onload = toggleModalDarkMode;
prefersDarkScheme.addEventListener('change', toggleModalDarkMode);