import { createContext, useEffect, useState } from "react";


const LanguageContext = createContext();

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

const initialLanguage = "es"
const LanguageProvider = ({children}) => {

    
    const [language, setLanguage] = useState(initialLanguage);
    const [texts, setTexts] = useState(translation[language]);


    useEffect(() => {
        // Establecer el idioma en el cliente
        setLanguage(localStorage.getItem("language") || initialLanguage);
        console.log("el localstorage da "+localStorage.getItem("language") );
      }, []);
    
      useEffect(() => {
        // Actualizar los textos cuando el idioma cambie
        setTexts(translation[language]);
        localStorage.setItem("language", language);
      }, [language]);


    // useEffect(() => {
        
    //     // Detectar el idioma del navegador
    //     const detectedLanguage = navigator.language.split('-')[0];
    //     if (detectedLanguage === "es") {
    //         setlanguage("es");
    //         setTexts(translation.es);
    //     } else {
    //         setlanguage("en");
    //         setTexts(translation.en);
    //     };
    //   }, []);

    const cambiarIdioma = (e) => {
        if (e.target.checked === true) {
            setLanguage("es");
            setTexts(translation.es);
        } else {
            setLanguage("en");
            setTexts(translation.en);
        };
        console.log(language);
    }

    const data = { texts, cambiarIdioma, language }
    return <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
}

export {LanguageProvider};

export default LanguageContext;