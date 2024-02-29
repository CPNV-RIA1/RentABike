// Assume your i18n setup is in a separate file, e.g., i18n.js

import i18next from 'i18next';

i18next.init({
    lng: 'en',
    resources: {
        en: {
            translation: {
                greeting: 'Hello',
                goodbye: 'Goodbye'
            }
        },
        fr: {
            translation: {
                greeting: 'Bonjour',
                goodbye: 'Au revoir'
            }
        },
        de: {
            translation: {
                greeting: 'Hallo',
                goodbye: 'Auf Wiedersehen'
            }
        }
    }
});

export default i18next;
