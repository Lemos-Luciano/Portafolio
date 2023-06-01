"use client";
import React, { useContext } from "react";
import { motion } from "framer-motion";
import Image from 'next/image';
import LanguageContext from '../context/LanguageContext';



type Props = {};

export default function Skills({}: Props) {

  const { texts } = useContext(LanguageContext)
  
  const skillsfront = [
    { nombre: "React"},
    { nombre: "TypeScript"},
    { nombre: "Nextjs" },
    { nombre: "TailwindCss" },
    { nombre: "Redux" },
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
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] p-10 min-h-screen justify-center mx-auto items-center"
    >
      <h3 className="titulos">
        {texts.hero_skills}
      </h3>

      <h3 className="absolute top-32 max-md:top-[10rem] uppercase tracking-[3px] text-gray-500 text-base">
        {texts.skills_title}
      </h3>

      <div className="flex max-md:flex-col">
        <div className="flex flex-col max-md:flex-row items-center border-r-2 max-md:border-r-0 max-md:border-b-2 max-md:pb-10 border-gray-500 ">
          <h2 className="text-xl m-5">Frontend</h2>
        <div className="flex flex-wrap max-w-sm content-center justify-center gap-7">
          {skillsfront.map((skill, i) => (
            <div key={i} className="group relative flex cursor-pointer">
              <img
                src={`https://github.com/Lemos-Luciano/Portafolio/blob/main/personalweb_2.0/public/Skills/${skill.nombre}.png?raw=true`}
                alt="Imagen Proyecto"
                className="rounded-full border border-gray-500 object-scale-down w-24 h-24 max-md:w-16 max-md:h-16 p-2 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
              <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 max-md:w-16 max-md:h-16 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                  <p className="text-base max-md:text-xs font-bold text-black opacity-100">
                    {skill.nombre}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col max-md:flex-row max-md:pt-10 items-center">
          <h2 className="text-xl m-5">Backend</h2>
        <div className="flex flex-wrap max-w-sm content-center justify-center gap-7 ">
          {skillsback.map((skill, i) => (
            <div key={i} className="group relative flex cursor-pointer">
              <img
                src={`https://github.com/Lemos-Luciano/Portafolio/blob/main/personalweb_2.0/public/Skills/${skill.nombre}.png?raw=true`}
                alt="Imagen Proyecto"
                className="rounded-full border border-gray-500 object-scale-down w-24 h-24 max-md:w-16 max-md:h-16 p-2 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
              <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 max-md:w-16 max-md:h-16 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                <p className="text-base max-md:text-xs font-bold text-black opacity-100">
                    {skill.nombre}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>

      </div>

    </motion.div>
  );
}
