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
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'> About </h3>

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
            className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] '
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>Un poco de mi <span className='underline decoration-[#F7AB0A]/50'>historia</span> personal</h4>
            <p className='text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, nesciunt unde? Quaerat doloremque inventore, eaque veniam dolorum magnam fugit quis harum! Reprehenderit iure fugit laborum corporis quibusdam sed eius dolorem harum reiciendis doloremque quae, magnam ea ex eum libero at iste enim exercitationem quod aperiam laboriosam. Doloremque exercitationem deserunt molestias.
            </p>
        </div>
    </motion.div>
  )
}