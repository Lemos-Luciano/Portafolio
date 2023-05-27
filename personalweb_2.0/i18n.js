import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        // Definir las traducciones en inglés
        "hero.about" : "About",
        "hero.skills" : "Skills",
        "hero.projects" : "Projects",
        "hero.contact" : "contact",
        "about.titulo1" : "A bit of my ",
        "about.titulo2" : "personal",
        "about.titulo3" : " history ",
      }
    },
    es: {
      translation: {
        // Definir las traducciones en español
        "hero.about" : "Sobre Mi",
        "hero.skills" : "Skills",
        "hero.projects" : "Proyectos",
        "hero.contact" : "Contacto",
        "about.titulo1" : "Un poco de mi ",
        "about.titulo2" : "historia",
        "about.titulo3" : " personal ",

      }
    }
    // Agregar más idiomas según sea necesario
  },
  lng: '', // Establecer el idioma predeterminado
  fallbackLng: '', // Establecer el idioma de respaldo
  interpolation: {
    escapeValue: false // No escapar valores HTML
  }
});

export default i18n;