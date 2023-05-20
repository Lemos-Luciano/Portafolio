"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from 'next/image';



type Props = {};

export default function Skills({}: Props) {
  const skillsfront = [
    { nombre: "React"},
    { nombre: "TypeScript"},
    { nombre: "Nextjs" },
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
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] p-10 min-h-screen justify-center mx-auto items-center"
    >
      <h3 className="titulos">
        skills
      </h3>

      <h3 className="absolute top-32 uppercase tracking-[3px] text-gray-500 text-base">
        Un poco de mi experencia personal
      </h3>

      <div className="flex max-md:flex-col">
        <div className="flex flex-col items-center border-r-2 max-md:border-r-0 max-md:border-b-2 max-md:pb-10 border-gray-500 ">
          <h2 className="text-xl m-10">Frontend</h2>
        <div className="flex flex-wrap max-w-sm content-center justify-center gap-7">
          {skillsfront.map((skill, i) => (
            <div key={i} className="group relative flex cursor-pointer">
              <img
                src={`https://github.com/Lemos-Luciano/Portafolio/blob/main/personalweb_2.0/public/Skills/${skill.nombre}.png?raw=true`}
                alt="Imagen Proyecto"
                className="rounded-full border border-gray-500 object-scale-down w-24 h-24 p-2 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
              <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                  <p className="text-base font-bold text-black opacity-100">
                    {skill.nombre}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center">
          <h2 className="text-xl m-10">Backend</h2>
        <div className="flex flex-wrap max-w-sm content-center justify-center gap-7 ">
          {skillsback.map((skill, i) => (
            <div key={i} className="group relative flex cursor-pointer">
              <img
                src={`https://github.com/Lemos-Luciano/Portafolio/blob/main/personalweb_2.0/public/Skills/${skill.nombre}.png?raw=true`}
                alt="Imagen Proyecto"
                className="rounded-full border border-gray-500 object-scale-down w-24 h-24 p-2 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
              <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                <p className="text-base font-bold text-black opacity-100">
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
