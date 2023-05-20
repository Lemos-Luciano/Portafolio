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
        <div className='border border-[#333333] rounded-full h-[400px] w-[400px] max-md:h-[200px] max-md:w-[200px] animate-ping absolute z-[-10] '/>
        <div className='border border-[#333333] rounded-full h-[300px] w-[300px] max-md:h-[150px] max-md:w-[150px] absolute z-[-10]'/>
        <div className='border border-[#333333] rounded-full h-[500px] w-[500px]  max-md:h-[250px] max-md:w-[250px] absolute z-[-10]'/>
        <div className='rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] max-md:h-[325px] max-md:w-[325px] absolute animate-pulse z-[-10]' />
        <div className='rounded-full border border-[#333333] h-[800px] w-[800px] max-md:h-[400px] max-md:w-[400px] absolute z-[-10]'/>
    </motion.div>
  )
}

export default BackgroundCircles