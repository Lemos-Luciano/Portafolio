"use client";
import React, { useContext } from 'react';
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { TbWorldWww } from 'react-icons/tb';
import LanguageContext from '../context/LanguageContext';





type Props = {
};

export default function Proyectos({}: Props) {

    const {texts, language} = useContext(LanguageContext)

    const todoslosproyectos = [
        {
            nombre: "LuchoFlix",
            foto : "../Proyecto1_LuchoFlix.png",
            url: "https://luchoflix.vercel.app/",
            git: "https://github.com/Lemos-Luciano/Portafolio/tree/main/LuchoFlix",
            descripcion: 'Página web con las mejores sinopsis de películas. Realizada con React y Node.js (Express.js). LuchoFlix obtiene los datos de la API "https://developers.themoviedb.org/" y además cuenta con una base de datos propia alojada en MongoDB. Esta base de datos se utiliza para almacenar el historial de los usuarios (películas favoritas, etc.). La autenticación de los usuarios y las cuentas se encuentran alojadas en Firebase de Google.',
            descripcion2: 'Web with the best movie synopses. Built with React and Node.js (Express.js). LuchoFlix fetches data from the API "https://developers.themoviedb.org/" and also has its own database hosted on MongoDB. It is used to store user history (favorite movies, etc.). User authentication and accounts are hosted on Google Firebase.',
        },
        {
            nombre: "WebPersonal2.0",
            url: "https://lucianolemos.vercel.app/",
            git: "https://github.com/Lemos-Luciano/Portafolio/tree/main/personalweb_2.0",
            foto : "../Proyecto2_WebPersonal.png",
            descripcion : "Página web personal donde encontrará una breve descripción sobre mí y acceso directo a mis trabajos personales",
            descripcion2: 'Personal website where you will find a brief description about me and direct access to my personal projects',

        },
        {
            nombre: "BuscadorPaises",
            url: "https://lucianolemos-apiproject.vercel.app/",
            git: "https://github.com/Lemos-Luciano/Portafolio/tree/main/API_Project",
            foto : "../Proyecto3_country_api.png",
            descripcion: 'Proyecto en el cual podemos consultar los datos más relevantes de un país. Se conecta a la API "https://restcountries.com/" para obtener la información solicitada.',
            descripcion2: 'Project where we can retrieve the most relevant data of a country. It connects to the API "https://restcountries.com/" to fetch the requested information.',

        }
        
    ];

  return (
    <motion.div 
    initial={{ opacity:0}}
    transition={{duration:2}}
    whileInView={{opacity:1}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='titulos'>
            {texts.hero_projects}
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/200 scrollbar-thumb-[#F7AB0A]/80'>
            {todoslosproyectos.map((proyecto, i) => (
            <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center pt-28 px-14 h-screen'>
                <a href={proyecto.url}  target="_blank">
                    <motion.img 
                    initial={{ opacity:0, y:-200}}
                    transition={{duration:2.5}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{ once:true}}
                    src={`../../proyectos/Proyecto${i}.png`}
                    alt={`Imagen Proyecto ${i}`} 
                    className='flex max-w-md'
                    />
                </a>

                <div className='space-y-10 px-0 max-w-6xl'>
                    <a href={proyecto.url} target="_blank"> 
                        <h4 className='text-xl font-semibold text-center max-md:text-base max-lg:text-lg'>
                            <TbWorldWww className='inline-block text-2xl mr-4'/>
                            <span className='underline decoration-[#F7AB0A]/50'>
                             {proyecto.nombre}  
                            </span>  | {(language === "es") ? "Proyecto" : "Project"} {i+1} {(language === "es") ? "de" : "of"} {todoslosproyectos.length} 
                        </h4>
                    </a>
                    <p className='text-base text-center max-md:text-left '>
                        {(language === "es") ? proyecto.descripcion : proyecto.descripcion2}
                        {/* {proyecto.descripcion} */}
                    </p>
                    <div className='flex justify-end'>
                        <SocialIcon 
                        url={proyecto.git}
                        fgColor="gray"
                        bgColor="transparent"
                        target="_blank"
                        />
                    </div>

                </div>
            </div>
            ))}
        </div>

        {/* raya de fondo */}
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}