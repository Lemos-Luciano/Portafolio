"use client";
import React, { useContext } from 'react';
import { motion } from "framer-motion";

import LanguageContext from '../context/LanguageContext';

type Props = {}

export default function About({}: Props) {
    const { texts } = useContext(LanguageContext)
  return (
    <motion.div 
    initial={{opacity: 0 }}
    transition={{ duration: 2.0 }}
    whileInView={{ opacity: 1 }}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='titulos'> {texts.hero_about} </h3>

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
                src= "../../Profile.jpg"
                alt="Profile Image"
                className='md:mb-0 mb-2 flex-shrink-0 max-md:flex-shrink-[3] w-56 h-56 max-md:w-32 max-md:h-32 rounded-full object-cover md:rounded-lg md:w-64 2xl:h-[22rem]'
                // className='-mb-20 md:mb-0 flex-shrink-0 max-md:flex-shrink-[3] w-56 h-56 max-md:w-32 max-md:h-32 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] '
            />


            <div className=' px-0 md:px-10 flex flex-col space-y-7 max-w-2xl'>
                <h4 className='text-2xl font-semibold lg:mb-2 max-md:hidden'>  {texts.about_title1} <span className='underline decoration-[#F7AB0A]/50'>  {texts.about_title2} </span> {texts.about_title3} </h4>

                <h3 className='text-xl font-semibold'> {texts.about_title4} </h3>
                <div>
                    <p className='text-base text-left'>
                        {texts.about_p1}
                    </p>
                    <ul className='text-left'>
                        <br />
                        <li> {texts.about_p2} </li>
                        <li> {texts.about_p3} </li>
                        <li> {texts.about_p4} </li>
                    </ul>
                    <br />
                    <span className='hidden md:inline'>
                        {texts.about_p5}  
                    </span>
                </div>
            </div>
        </div>
    </motion.div>
  )
}