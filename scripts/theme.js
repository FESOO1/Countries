const body = document.body;
const themeButton = document.querySelector('#themeButton');
const themeButtonText = document.querySelector('.navbar-button-text');
let isLightMode = false;

// TOGGLING BETWEEN LIGHT AND DARK MODE

function togglingBetweenLightAndDarkMode() {
    if (isLightMode === false) {
        body.classList.add('body-theme-js');
        themeButton.classList.add('theme-button-js');
        themeButtonText.textContent = 'Dark Mode';
        
        isLightMode = true;
        localStorage.setItem('isLightThemeOn', isLightMode);
    } else {
        body.classList.remove('body-theme-js');
        themeButton.classList.remove('theme-button-js');
        themeButtonText.textContent = 'Light Mode';
        
        isLightMode = false;
        localStorage.setItem('isLightThemeOn', isLightMode);
    };
};

// INITIALIZING BUTTON
themeButton.addEventListener('click', togglingBetweenLightAndDarkMode);

// LOCAL STORAGE

function localStorageTheme() {
    const themeLocalStorage = localStorage.getItem('isLightThemeOn');

    if (themeLocalStorage === 'true') {
        body.classList.add('body-theme-js');
        themeButton.classList.add('theme-button-js');
        themeButtonText.textContent = 'Dark Mode';

        isLightMode = true;
    };
};

localStorageTheme();