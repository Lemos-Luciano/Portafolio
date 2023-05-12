"use client";
import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function Proyectos({}: Props) {
    const proyectos = [1,2,3,4,5];
  return (
    <motion.div 
    initial={{ opacity:0}}
    transition={{duration:2}}
    whileInView={{opacity:1}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Proyectos
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/200 scrollbar-thumb-[#F7AB0A]/80'>
            {proyectos.map((proyecto, i) => (
            <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                    <motion.img 
                    initial={{ opacity:0, y:-300}}
                    transition={{duration:1.5}}
                    whileInView={{opacity:1, y:0}}
                    viewport={{ once:true}}
                    src="https://github.com/Lemos-Luciano/Portafolio/blob/main/LuchoFlix/Frontend/src/assets/logo.png?raw=true" alt="" />
                
                <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                    <h4 className='text-4xl font-semibold text-center'>
                        <span className='underline decoration-[#F7AB0A]/50'>
                            caso {i+1} de {proyectos.length}: LuchoFlix
                        </span> 
                    </h4>

                    <p className='text-lg text-center md:text-left'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi nobis suscipit eum quod pariatur veniam, vero, molestias obcaecati aliquid nostrum maxime reiciendis. A, corrupti at modi amet cupiditate eveniet voluptates quisquam, cumque ratione ipsam similique itaque tenetur error fugit eligendi perspiciatis optio tempore expedita. Facere labore mollitia consequatur, dolorem voluptates quas tempora quae illum minima nisi, ad saepe recusandae odit possimus delectus vel culpa aliquid ipsam dolor minus unde et? Eligendi repellat tempore dolorem quo laudantium ipsa quae blanditiis itaque.
                    </p>
                </div>
            </div>
            ))}
        </div>

        {/* raya de fondo */}
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12' />
    </motion.div>
  )
}