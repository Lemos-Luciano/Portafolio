import { createContext, useEffect, useState } from "react";


const LanguageContext = createContext();

const initialLanguage = "es"
const translation = {
    es : {
        "hero_about" : "Sobre Mi",
        "hero_skills" : "Skills",
        "hero_projects" : "Proyectos",
        "hero_contact" : "Contacto",
        "hero_words" : `["esta en español", "llamame papi"]`,
    },
    en : {
        "hero_about" : "About",
        "hero_skills" : "Skills",
        "hero_projects" : "Projects",
        "hero_contact" : "Contact",
        "hero_words" : `["esta en ingles", "call me dady"]`,

    }
}

const LanguageProvider = ({children}) => {

    
    const [language, setlanguage] = useState(initialLanguage);
    const [texts, settexts] = useState(translation[language])

    useEffect(() => {
        // Detectar el idioma del navegador
        const detectedLanguage = navigator.language.split('-')[0];
        if (detectedLanguage === "es") {
            setlanguage("es");
            settexts(translation.es);
        } else {
            setlanguage("en");
            settexts(translation.en);
        };
      }, []);

    const cambiarIdioma = (e) => {
        if (e.target.checked === true) {
            setlanguage("es");
            settexts(translation.es);
        } else {
            setlanguage("en");
            settexts(translation.en);
        };
        console.log(language);
    }

    const data = { texts, cambiarIdioma, language }
    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}

export {LanguageProvider};

export default LanguageContext;