'use client'
import React from 'react'
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial={{ opacity:0, }}
    animate={{ 
        scale: [1,2,2,3,1],
        opacity: [0.1, 0,2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%" ],
    }}
    transition={{ duration: 2.5,}}

    className='relative flex justify-center items-center top-16 z-[-10]'>
        <div className='border border-[#333333] rounded-full h-[100px] w-[100px] max-md:h-[200px] max-md:w-[200px] animate-ping absolute'/>
        <div className='border border-[#333333] rounded-full h-[0px] w-[0px] max-md:h-[150px] max-md:w-[150px] absolute '/>
        <div className='border border-[#333333] rounded-full h-[200px] w-[200px]  max-md:h-[250px] max-md:w-[250px] absolute '/>
        <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[350px] w-[350px] max-md:h-[325px] max-md:w-[325px] absolute animate-pulse ' />
        <div className='rounded-full border border-[#333333] h-[500px] w-[500px] max-md:h-[400px] max-md:w-[400px] absolute '/>
    </motion.div>
  )
}

export default BackgroundCircles