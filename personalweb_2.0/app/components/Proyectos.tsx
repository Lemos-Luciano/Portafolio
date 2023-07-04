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
            nombre: "Sitio web de la empresa constructora: BCSRL (2023 – 6 meses)",
            url: "https://www.bcsrl.com.ar/",
            git: "https://www.bcsrl.com.ar/",
            descripcion: 'La página web de BCSRL fue desarrollada utilizando una combinación de tecnologías, como React, Node, Express, una base de datos relacional (PostgreSQL) y Bootstrap para el diseño y estilo. Para el inicio de sesión de los usuarios, se implementó una base de datos utilizando JSON Web Tokens (JWT), donde se almacenan los datos de los suscriptores. Esta implementación asegura la autenticación y autorización segura de los usuarios, permitiendo el acceso solo a aquellos autorizados a la información confidencial de la empresa constructora.',
            descripcion2: 'The BCSRL website was developed using a combination of technologies, such as React, Node, Express, a relational database (PostgreSQL), and TailwindCSS for design and styling. For user login, a database was implemented using JSON Web Tokens (JWT), where subscriber data is stored. This implementation ensures secure user authentication and authorization, allowing access only to those authorized to view confidential information of the construction company.',
        },
        {
            nombre: "Sitio web de la Escuela de Surf: Sudesta (2022 – 6 meses)",
            url: "https://www.sudestadapinamar.com.ar/",
            git: "https://www.sudestadapinamar.com.ar/",
            descripcion: 'La página web de Sudesta fue desarrollada utilizando una combinación de tecnologías, como React, Node, Express, una base de datos relacional (PostgreSQL) y Bootstrap para el diseño y estilo. Para el inicio de sesión de los usuarios, se implementó una base de datos utilizando JSON Web Tokens (JWT) y Auth0, donde se almacenan los datos de los alumnos y profesores. Esta implementación permite modificar los calendarios, disponibilidad y permisos de usuario, así como también aplicar códigos de promoción. Cada usuario tiene la posibilidad de cambiar su perfil, ver su calendario con clases reservadas y los profesores asignados. También se agregó una plataforma de pago y un carrito para facilitar la reserva y el pago de las clases.',
            descripcion2: 'The Sudesta website was developed using a combination of technologies, such as React, Node, Express, a relational database (PostgreSQL), and Bootstrap for design and styling. For user login, a database was implemented using JSON Web Tokens (JWT) and Auth0, where student and teacher data is stored. This implementation allows for modifying calendars, availability, and user permissions, as well as applying promotional codes. Each user has the ability to update their profile, view their calendar with booked classes, and assigned teachers. A payment platform and shopping cart were also added to facilitate class booking and payment.',
        },
        {
            nombre: "Sitio web del restaurante: El Buho Tuerto (2021 – 3 meses)",
            url: "https://elbuhotuerto.com/",
            git: "https://elbuhotuerto.com/",
            descripcion: 'El sitio web de El Buho Tuerto fue desarrollado en Javascript utilizando las librerías de ReactJS y NodeJS con los frameworks NextJS y Express. El maquetado de la página se realizó con TailwindCSS. El formato de la página está diseñado para ser una única página con desplazamiento vertical. Además, cuenta con un menú en 3 idiomas. La página también incluye una sesión para el personal, donde pueden acceder a un calendario y agendar las distintas reservas. La base de datos utilizada es no relacional y se aloja en MongoDB.',
            descripcion2: 'The El Buho Tuerto website was developed in Javascript using the ReactJS and NodeJS libraries with the NextJS and Express frameworks. The page layout was done with TailwindCSS. The website is designed to be a single-page with vertical scrolling. It also features a menu in 3 languages. The website includes a session for staff members, where they can access a calendar and schedule various reservations. The database used is a non-relational database hosted on MongoDB.',
        },
        {
            nombre: "Sitio web para amantes del cine: LuchoFlix (2020 – 6 meses)",
            foto : "../Proyecto1_LuchoFlix.png",
            url: "https://luchoflix.vercel.app/",
            git: "https://github.com/Lemos-Luciano/Portafolio/tree/main/LuchoFlix",
            descripcion: 'LuchoFlix es una página web para los amantes del cine que proporciona sinopsis detalladas de diversas películas. Fue realizada con React y NodeJS (ExpressJS). LuchoFlix utiliza la API "https://developers.themoviedb.org/" para obtener los datos y dispone de una base de datos propia alojada en MongoDB. Esta base de datos se utiliza para guardar el historial de los usuarios, como sus películas favoritas, entre otros. La autenticación de los usuarios y sus cuentas están alojadas en Firebase de Google.',
            descripcion2: `LuchoFlix is a website for movie lovers that provides detailed synopses of various films. It was built using React and NodeJS (ExpressJS). LuchoFlix utilizes the "https://developers.themoviedb.org/" API to fetch data and has its own database hosted on MongoDB. This database is used to store user history, such as their favorite movies, among others. User authentication and accounts are hosted on Google's Firebase.`,
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