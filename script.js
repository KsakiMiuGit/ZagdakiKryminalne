// Pobranie ustawień preferencji kolorów z systemu użytkownika
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const currentTheme = localStorage.getItem('theme');
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// Ustawienie domyślnego trybu na podstawie ustawień systemowych
if (prefersDarkScheme.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    document.documentElement.setAttribute('data-theme', 'light');
}

// Ustawienie aktualnego trybu z pamięci lokalnej, jeśli istnieje
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Ustawienie przełącznika na stronie zgodnie z aktualnym trybem
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// Obsługa zmiany trybu kolorów po kliknięciu na przełącznik
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
