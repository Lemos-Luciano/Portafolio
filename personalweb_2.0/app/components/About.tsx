"use client";
import React from 'react';
import { motion } from "framer-motion";
import FotoPerfil from "../../public/Profile.jpg";




type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0 }}
    transition={{ duration: 2.0 }}
    whileInView={{ opacity: 1 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='titulos'> About </h3>

        <div className='bg-[#292929] rounded-md p-10 flex flex-col md:flex-row relative text-center md:text-left  max-w-7xl px-10 justify-evenly mx-auto items-center'>
            
            <motion.img 
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                // Ejecuta la funcion cuando se encuentra a la vista
                transition={{
                    duration: 2.0,
                }}
                whileInView={{
                    x:0,
                    opacity: 1,
                }}
                // Solo se ejecuta una vez
                viewport={{once: true}}
                src= {FotoPerfil.src}
                alt="Profile Image"
                className='md:mb-0 mb-2 flex-shrink-0 max-md:flex-shrink-[3] w-56 h-56 max-md:w-32 max-md:h-32 rounded-full object-cover md:rounded-lg md:w-64 2xl:h-[22rem]'
                // className='-mb-20 md:mb-0 flex-shrink-0 max-md:flex-shrink-[3] w-56 h-56 max-md:w-32 max-md:h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] '
            />


            <div className=' px-0 md:px-10 flex flex-col space-y-7 max-w-2xl'>
                <h4 className='text-2xl font-semibold lg:mb-2 max-md:hidden'>Un poco de mi <span className='underline decoration-[#F7AB0A]/50'>historia</span> personal</h4>

                <h3 className='text-xl font-semibold'>Desarrollador fullstack Python y Javascript.</h3>
                <div>
                    <p className='text-base text-left'>
                    Las mayorías de mis proyectos se encuentran realizado con las siguientes tecnologías:
                    <br />
                    <li>Fronted: React utilizando el framework Next.js</li>
                    <li>Backend: Node.Js utilizando el framework de Express.js</li>
                    <li>Base de datos: MongoDB y SQL Server</li>
                    <br />
                    <span className='hidden md:inline'>
                    Para más información no dude en visualizar mis proyectos personales en la pestaña portafolio. También puede ponerse en contacto conmigo o si lo prefiere rellene el formulario que se encuentra en la parte inferior de la página, me pondré en contacto con usted lo antes posible.
                    </span>
                    </p>
                </div>
            </div>
    </div>
        </motion.div>
  )
}