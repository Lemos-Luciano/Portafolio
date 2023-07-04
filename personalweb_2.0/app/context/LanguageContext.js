import { createContext, useEffect, useState } from "react";


const LanguageContext = createContext();

const translation = {
    es : {
        "hero_about" : "Sobre Mi",
        "hero_skills" : "Skills",
        "hero_projects" : "Proyectos",
        "hero_contact" : "Contacto",
        "hero_title" : "Desarrollador  Fullstack",
        "about_title1" : "Un poco ",
        "about_title2" : "sobre mi",
        "about_title3" : " experencia personal.",
        "about_title4" : "Desarrollador fullstack | Javascript y Python.",
        "about_p1" : "Durante los últimos 3 años, he trabajado como desarrollador freelance, creando sitios web personalizados.",
        "about_p2" : "•Tecnologías como 𝐑𝐞𝐚𝐜𝐭𝐉𝐒, 𝐍𝐞𝐱𝐭𝐉𝐒, 𝐍𝐨𝐝𝐞𝐉𝐒 y 𝐄𝐱𝐩𝐫𝐞𝐬𝐬. Bases de 𝐛𝐚𝐬𝐞𝐬 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬 𝐫𝐞𝐥𝐚𝐜𝐢𝐨𝐧𝐚𝐥𝐞𝐬 𝐲 𝐧𝐨 𝐫𝐞𝐥𝐚𝐜𝐢𝐨𝐧𝐚𝐥𝐞𝐬, incluyendo 𝐏𝐨𝐬𝐭𝐠𝐫𝐞𝐒𝐐𝐋, 𝐅𝐢𝐫𝐞𝐛𝐚𝐬𝐞, 𝐀𝐳𝐮𝐫𝐞 𝐲 𝐌𝐨𝐧𝐠𝐨𝐃𝐁. 𝐆𝐢𝐭 para el control de versiones.",
        "about_p3" : "•Metodologías ágiles como 𝐒𝐜𝐫𝐮𝐦 𝐲 𝐊𝐚𝐧𝐛𝐚𝐧 con herramientas como 𝐉𝐢𝐫𝐚 𝐲 𝐓𝐫𝐞𝐥𝐥𝐨. Esto incluye ceremonias, sprints, roles definidos y un sistema de puntos.",
        "about_p4" : "•Soy fluido en 𝐢𝐧𝐠𝐥é𝐬, 𝐩𝐨𝐫𝐭𝐮𝐠𝐮é𝐬 𝐲 𝐞𝐬𝐩𝐚ñ𝐨𝐥, lo que me permite trabajar en un entorno multilingüe.",
        "about_p5" : '',
        "skills_title" :  "Habilidades y herramientas utilizadas en mis proyectos.",
        "contact_slogan" : "Tengo justo lo que usted necesita",
        "contact_slogan2" : "Contácteme",


    },
    en : {
        "hero_about" : "About",
        "hero_skills" : "Skills",
        "hero_projects" : "Projects",
        "hero_contact" : "Contact",
        "hero_title" : "Fullstack  Developer",
        "about_title1" : "A brief overview ",
        "about_title2" : "of my professional",
        "about_title3" : " experience.",
        "about_title4" : "Fullstack  Developer | Javascript y Python.",
        "about_p1" : "Over the past 3 years, I have worked as a freelance developer, creating custom websites.",
        "about_p2" : "•Technologies like 𝐑𝐞𝐚𝐜𝐭𝐉𝐒, 𝐍𝐞𝐱𝐭𝐉𝐒, 𝐍𝐨𝐝𝐞𝐉𝐒, and 𝐄𝐱𝐩𝐫𝐞𝐬𝐬. Both relational and non-relational database systems, including 𝐏𝐨𝐬𝐭𝐠𝐫𝐞𝐒𝐐𝐋, 𝐅𝐢𝐫𝐞𝐛𝐚𝐬𝐞, 𝐀𝐳𝐮𝐫𝐞, and 𝐌𝐨𝐧𝐠𝐨𝐃𝐁. 𝐆𝐢𝐭 for version control.",
        "about_p3" : "•Agile methodologies like 𝐒𝐜𝐫𝐮𝐦 and 𝐊𝐚𝐧𝐛𝐚𝐧 with tools like 𝐉𝐢𝐫𝐚 and 𝐓𝐫𝐞𝐥𝐥𝐨. This includes ceremonies, sprints, defined roles, and a points system.",
        "about_p4" : "•I am fluent in 𝐈𝐧𝐠𝐥𝐢𝐬𝐡, 𝐏𝐨𝐫𝐭𝐮𝐠𝐮𝐞𝐬, and 𝐄𝐬𝐩𝐚ñ𝐨𝐥, which allows me to work in a multilingual environment.",
        "about_p5" : '',
        "skills_title" :  "Skills and tools utilized in my projects.",
        "contact_slogan" : "I have exactly what you need",
        "contact_slogan2" : "Contact me",

    
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