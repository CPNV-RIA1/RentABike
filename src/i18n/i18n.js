import i18next from '../../public_html/assets/vendors/i18next/i18next.js';

i18next.init({
    lng: 'fr',
    resources: {
        en: {
            translation: {
                greeting: 'Hello',
                goodbye: 'Goodbye',
                aboutUs: 'About Us',
                testimonials: 'Testimonials',
                welcome: 'Welcome to your motorcycle dealer',
                openTime: 'Opening Times',
                workingTime: 'Working Times',
                monThu: 'Monday - Thursday : ',
                friSat: 'Friday - Saturday : ',
                satSun: 'Saturday - Sunday : ',
                otMorning: '7:00 am - 12:00 pm',
                otFullDay: '7:00 am - 6:00 pm',
                otAfternoon: '1:00 pm - 6:00 pm',
                rent: 'Rent A Bike',
                ourBike: 'Our Bikes',
                bestClient: 'Best Clients',
                disclaimer: 'We don\'t span customers. Check our Privacy Policy',
                location: 'Our Location',
                help: 'help Center',
                call: "Call Us"
            }
        },
        fr: {
            translation: {
                greeting: "Bonjour",
                goodbye: "Au revoir",
                aboutUs: "À propos de nous",
                testimonials: "Témoignages",
                welcome: "Bienvenue chez votre concessionnaire de motos",
                openTime: "Horaires d'ouverture",
                workingTime: "Horaires de travail",
                monThu: "Lundi - Jeudi : ",
                friSat: "Vendredi - Samedi : ",
                satSun: "Samedi - Dimanche : ",
                otMorning: "7h00 - 12h00",
                otFullDay: "7h00 - 18h00",
                otAfternoon: "13h00 - 18h00",
                rent: "Louez une moto",
                ourBike: "Nos motos",
                bestClient: "Meilleurs clients",
                disclaimer: "Nous ne spammons pas les clients. Consultez notre Politique de confidentialité",
                location: "Notre emplacement",
                help: "Centre d'aide",
                call: "Appelez-nous"
            }
        },
        de: {
            translation: {
                greeting: "Hallo",
                goodbye: "Auf Wiedersehen",
                aboutUs: "Über uns",
                testimonials: "Kundenbewertungen",
                welcome: "Willkommen bei unserem Motorradhändler",
                openTime: "Öffnungszeiten",
                workingTime: "Arbeitszeiten",
                monThu: "Montag - Donnerstag : ",
                friSat: "Freitag - Samstag : ",
                satSun: "Samstag - Sonntag : ",
                otMorning: "7:00 Uhr - 12:00 Uhr",
                otFullDay: "7:00 Uhr - 18:00 Uhr",
                otAfternoon: "13:00 Uhr - 18:00 Uhr",
                rent: "Motorrad mieten",
                ourBike: "Unsere Motorräder",
                bestClient: "Beste Kunden",
                disclaimer: "Wir spammen keine Kunden. Überprüfen Sie unsere Datenschutzrichtlinie",
                location: "Unser Standort",
                help: "Hilfezentrum",
                call: "Rufen Sie uns an"
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
document.getElementById('languageSelect').addEventListener('change', function () {
    const selectedLanguage = this.value;
    i18next.changeLanguage(selectedLanguage, () => {
        translatePage();
    });
});
