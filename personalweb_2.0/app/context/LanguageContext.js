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
        "about_p1" : "Las mayorías de mis proyectos se encuentran realizados con las siguientes tecnologías:",
        "about_p2" : "• Fronted:  React / Next.js, TypeScript y TailwindCss",
        "about_p3" : "• Backend:  Node.Js / Express.js, Firebase y Azure",
        "about_p4" : "• Base de datos:  MongoDB y SQL Server",
        "about_p5" : 'Para más información no dude en visualizar mis trabajos personales en la pestaña "proyectos". También, puede ponerse en contacto conmigo o si lo prefiere rellene el formulario que se encuentra en la parte inferior de la página, me pondré en contacto con usted lo antes posible.',
        "skills_title" :  "Habilidades y herramientas utilizadas en mis proyectos.",


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
        "about_p1" : "The majority of my projects have been developed using the following technologies:",
        "about_p2" : "• Frontend: React/Next.js, TypeScript, and Tailwind CSS",
        "about_p3" : "• Backend: Node.js/Express.js, Firebase, and Azure",
        "about_p4" : "• Database: MongoDB and SQL Server",
        "about_p5" : 'For more information, please feel free to view my personal projects under the "Projects" tab. Additionally, you can contact me directly or fill out the form located at the bottom of the page, and I will get back to you as soon as possible.',
        "skills_title" :  "Skills and tools utilized in my projects.",

    
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