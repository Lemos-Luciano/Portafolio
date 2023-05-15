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
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        skills
      </h3>

      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Un poco de la experencias
      </h3>
      {/* <div>
        <h2>probando</h2>
        <img
                src={`../../public/skills/Nextjs.png`}
                alt="Imagen 1"
                className="rounded-full border border-gray-500 object-scale-down w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
        <img
                src={`/../public/skills/Nextjs.png`}
                alt="Imagen 2"
                className="rounded-full border border-gray-500 object-scale-down w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
        <img
                src={`/public/skills/Nextjs.png`}
                alt="Imagen 3"
                className="rounded-full border border-gray-500 object-scale-down w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
        <img
                src={`https://github.com/Lemos-Luciano/Portafolio/blob/main/personalweb_2.0/public/Skills/Nextjs.png?raw=true`}
                alt="Imagen 4"
                className="rounded-full border border-gray-500 object-scale-down w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
        <img
                src={`/skills/Nextjs.png`}
                alt="Imagen 4"
                className="rounded-full border border-gray-500 object-scale-down w-24 h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
              />
      </div> */}

      <div className="flex my-28">
        <div className="flex flex-wrap max-w-sm bg-gray-700 content-center justify-center gap-7 ">
          {skillsfront.map((skill, i) => (
            <div key={i} className="group relative flex cursor-pointer">
              <img
                src={`https://github.com/Lemos-Luciano/Portafolio/blob/main/personalweb_2.0/public/Skills/${skill.nombre}.png?raw=true`}
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

        <div className="flex flex-wrap max-w-sm bg-gray-700 content-center justify-center gap-7 ">
          {skillsback.map((skill, i) => (
            <div key={i} className="group relative flex cursor-pointer">
              <img
                src={`https://github.com/Lemos-Luciano/Portafolio/blob/main/personalweb_2.0/public/Skills/${skill.nombre}.png?raw=true`}
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
    </motion.div>
  );
}
