"use client";
import React from 'react';
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";



type Props = {
};

export default function Proyectos({}: Props) {

    const todoslosproyectos = [
        {
            nombre: "LuchoFlix",
            foto : "../Proyecto1_LuchoFlix.png",
            url: "https://luchoflix.vercel.app/",
            git: "https://github.com/Lemos-Luciano/Portafolio/tree/main/LuchoFlix",
            descripcion: 'Web con las mejores sinopsis de peliculas (con resumenes escritos y videos de trailers). El front de la aplicación está realizada con React y el backend con Nodejs y express LuchoFlix toma los datos de la web https://developers.themoviedb.org/ y a su vez dispone de una base de datos propia alojada en mongoDB. La misma es utilizada para guardar el historial de los usuarios (peliculas favoritas, etc.) La autenticacion de los usuarios y la cuentas de los mismo estan alojados en Firebase de google',
        },
        {
            nombre: "WebPersonal2.0",
            url: "https://lucianolemos.vercel.app/",
            git: "https://github.com/Lemos-Luciano/Portafolio/tree/main/personalweb_2.0",
            foto : "../Proyecto2_WebPersonal.png",
            descripcion : "Página web personal, allí encontrará una breve descripción sobre mí y acceso directo a mis trabajos personales",
        },
        {
            nombre: "BuscadorPaises",
            url: "https://lucianolemos-apiproject.vercel.app/",
            git: "https://github.com/Lemos-Luciano/Portafolio/tree/main/API_Project",
            foto : "../Proyecto3_country_api.png",
            descripcion: 'Proyecto en la cual podemos consultar los datos más relevantes de un país, el mismo. Se conecta a la API "https://restcountries.com/" obteniendo la información solicitada.',
        }
        
    ];

  return (
    <motion.div 
    initial={{ opacity:0}}
    transition={{duration:2}}
    whileInView={{opacity:1}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='titulos'>
            Proyectos
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/200 scrollbar-thumb-[#F7AB0A]/80'>
            {todoslosproyectos.map((proyecto, i) => (
            <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 h-screen'>
                <a href={proyecto.url}  target="_blank">
                    <motion.img 
                    initial={{ opacity:0, y:-200}}
                    transition={{duration:1.5}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{ once:true}}
                    src={`https://github.com/Lemos-Luciano/Portafolio/blob/main/personalweb_2.0/public/proyectos/Proyecto${i}.png?raw=true`} 
                    alt={`Imagen Proyecto ${i}`} 
                    className='flex max-w-lg'
                    />
                </a>

                <div className='space-y-10 px-0 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center max-md:text-base max-lg:text-lg'>
                        <span className='underline decoration-[#F7AB0A]/50'>
                         {proyecto.nombre}  
                        </span> | Proyecto {i+1} de {todoslosproyectos.length}
                    </h4>
                    <p className='text-lg text-center md:text-left '>
                        {proyecto.descripcion}
                            <span className='hidden md:inline'>
                            texto largo para ocultar
                            </span>
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