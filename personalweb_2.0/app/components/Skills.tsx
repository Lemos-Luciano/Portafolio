"use client";
import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import Image from 'next/image';


type Props = {};

export default function Skills({}: Props) {
  const skillsfront = [
    { nombre: "React" },
    { nombre: "TypeScript" },
    { nombre: "NextJs" },
    { nombre: "TailwindCss" },
  ];

  const skillsback = [
    { nombre: "NodeJs" },
    { nombre: "ExpressJs" },
    { nombre: "Firebase" },
    { nombre: "MongoDB" },
    { nombre: "Azure" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 2.0 }}
      whileInView={{ opacity: 1 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Un poco de la experencias
      </h3>

      <Image src={`/skills/react.png`}
      alt="Foto react"
      width={500}
      height={500}
      />

      <div className="flex my-28">

        <div className="flex flex-wrap max-w-sm bg-gray-700 content-center items-center gap-7 ">
          {skillsfront.map((skill, i) => (
            <div key={i} className="group relative flex cursor-pointer">
              <img
                src={`../../public/skills/${skill.nombre}.png`}
                alt="Imagen Proyecto"
                className="rounded-full border border-gray-500 object-scale-down w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
              <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                  <p className="text-3xl font-bold text-black opacity-100">
                    {skill.nombre}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-5">
          {skillsback.map((skill, i) => (
            <div key={i} className="group relative flex cursor-pointer">
              <img
                src={`../skills/${skill.nombre}.png`}
                alt="Imagen Proyecto"
                className="rounded-full border border-gray-500 object-scale-down w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
              <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                  <p className="text-3xl font-bold text-black opacity-100">
                    {skill.nombre}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="grid grid-cols-4 gap-5"> */}
      {/* <div className="flex flex-wrap">
        <Skill />
        <Skill />
        <Skill /> */}
        {/* </div>
        <div className=''>
        <div className='bg-blue-500 relative h-60 w-120'>Hola deberia estar por debajo de la imagen 
            <div className='absolute top-0 left-0 overflow-hidden h-[100%] w-auto max-w-[100%] bg-red-500 resize-x'>
              <textarea className='relative opacity-1 resize-x w-5 h-5 top-[50%]' name="" id="">imagen 2</textarea>
            </div>
          </div>
        </div>

        <div>
          <div className='w-48 h-56 bg-red-500 m-auto relative'>Imagen 1
            <div className='bg-blue-400 absolute top-0 left-0 h-[100%] w-auto max-w-[100%]'>Imagen 2</div>
            <div className='absolute left-0 h-[10px] w-[10px] top-[50%] bg-green-500 resize-x overflow-hidden max-w-[100%]'>Imagen 3</div>
          </div> */}
      {/* </div> */}
    </motion.div>
  );
}
