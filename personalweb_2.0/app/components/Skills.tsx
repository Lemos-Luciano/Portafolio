"use client";
import React from 'react';
import { motion } from "framer-motion";
import Skill from './Skill';

type Props = {}

export default function Skills({}: Props) {
  return (
    <motion.div 
    initial={{opacity: 0 }}
    transition={{ duration: 2.0 }}
    whileInView={{ opacity: 1 }}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>skills</h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>Un poco de la experencias</h3>

        <div className='grid grid-cols-4 gap-5'>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>
    </motion.div>
  )
}