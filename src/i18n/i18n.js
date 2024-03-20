import i18next from '../../public_html/assets/vendors/i18next/i18next.js';

i18next.init({
    lng: 'fr',
    resources: {
        en: {
            translation: {
                greeting: 'Hello',
                goodbye: 'Goodbye',
                aboutUs: 'About Us'

            }
        },
        fr: {
            translation: {
                greeting: 'Bonjour',
                goodbye: 'Au revoir',
                aboutUs: 'À propos de nous'
            }
        },
        de: {
            translation: {
                greeting: 'Hallo',
                goodbye: 'Auf Wiedersehen',
                aboutUs: 'Über uns'
            }
        }
    }
});

// Function to translate the page
function translatePage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = i18next.t(key);
    });
}

// Initial translation
translatePage();

// Event listener for language change
document.getElementById('languageSelect').addEventListener('change', function() {
    const selectedLanguage = this.value;
    i18next.changeLanguage(selectedLanguage, () => {
        translatePage();
    });
});
