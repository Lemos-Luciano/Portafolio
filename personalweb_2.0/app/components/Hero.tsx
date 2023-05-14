"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

import FotoPerfil from "../../public/Profile.jpg";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Bienvenid@",
      "Soy Luciano Lemos",
      "Espero que disfrute mi contenido",
      "No dude en contactarme🤙📲",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">

      <div>
        <BackgroundCircles />
        <img
          className="relative rounded-full h-32 w-32 max-md:h-32 max-md:w-32 mx-auto object-cover"
          src={FotoPerfil.src}
          alt="Profile Image"
        />
      </div>
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] max-md:text-xs">
          Desarrollador   Fullstack
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10 max-md:text-3xl">
          <span> {text} </span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
            <a href="#about">
            <button className="heroButton"> About </button>
            </a>

          <a href="#experiencia">
            <button className="heroButton"> Experiencia </button>
          </a >
          <a href="#skills">
            <button className="heroButton"> Skills </button>
          </a>
          <a href="#proyectos">
            <button className="heroButton"> Proyectos </button>
          </a>
          <a href="#contactame">
            <button className="heroButton"> Contacto </button>
          </a>
        </div>
      </div>
    </div>
  );
}
