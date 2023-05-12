"use client";
import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function ExperienciasCards({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{ y:-100, opacity:0,}}
        transition={{ duration:2.0,}}
        whileInView={{opacity:1, y:0,}}
        viewport={{ once:true}}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png" 
        alt="" />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>CEO de google</h4>
            <p className='font-bold text-2xl mt-1'>Parrafo</p>
            <div className='flex space-x-2 my-2'>
                <img className='h-10 w-10 rounded-full' src="https://global.discourse-cdn.com/auth0/original/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9.png" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://global.discourse-cdn.com/auth0/original/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9.png" alt="" />
                <img className='h-10 w-10 rounded-full' src="https://global.discourse-cdn.com/auth0/original/2X/a/ae35edce19e64c53e5d455b22e8a2c82d093d4c9.png" alt="" />
            </div>
            <p  className='uppercase py-5 text-gray-300'>Comence a trabajar en 1900 y termine tal fecha...</p>
            <ul className='list-disc space-y-4 ml-5 text-lg'>
                <li>algunos puntos a tener en cuenta</li>
                <li>algunos puntos a tener en cuenta</li>
                <li>algunos puntos a tener en cuenta</li>
                <li>algunos puntos a tener en cuenta</li>
            </ul>
        </div>
    </article>
  )
}