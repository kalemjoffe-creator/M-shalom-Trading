(function () {
    const savedTheme = localStorage.getItem('mshalom-theme');
    if (savedTheme === 'light') document.body.classList.add('light-mode');

    function updateThemeButton() {
        const button = document.getElementById('themeToggle');
        if (!button) return;
        const light = document.body.classList.contains('light-mode');
        button.textContent = light ? '☀ Light Mode' : '☾ Dark Mode';
        button.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
        button.setAttribute('title', light ? 'Switch to dark mode' : 'Switch to light mode');
    }

    document.addEventListener('DOMContentLoaded', function () {
        const button = document.getElementById('themeToggle');
        if (button) {
            button.addEventListener('click', function () {
                document.body.classList.toggle('light-mode');
                localStorage.setItem(
                    'mshalom-theme',
                    document.body.classList.contains('light-mode') ? 'light' : 'dark'
                );
                updateThemeButton();
            });
        }
        updateThemeButton();
    });
})();
