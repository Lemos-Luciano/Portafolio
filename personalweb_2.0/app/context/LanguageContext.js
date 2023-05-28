import { createContext, useEffect, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "es"
const translation = {
    es : {
        "saludo" : "saludo",
        "hero_projects" : "Proyectos",
    },
    en : {
        "saludo" : "hellow",
        "hero_projects" : "Projects",

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
        if (e.target.value === "es") {
            setlanguage("es");
            settexts(translation.es);
        } else {
            setlanguage("en");
            settexts(translation.en);
        };
        console.log(language);
    }

    const data = { texts, cambiarIdioma }
    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}

export {LanguageProvider};

export default LanguageContext;