"use client";
import React  from "react";
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
      <div className="z-20 space-y-10">
        <h2 className="text-base uppercase text-gray-500 pb-2 tracking-[15px]">
          Desarrollador   Fullstack
        </h2>
        <div className="relative">
          <img
            className="relative rounded-full h-32 w-32 mx-auto object-cover"
            src={FotoPerfil.src}
            alt="Profile Image"
            id="fotoperfil"
          />
          <div className="absolute left-[50%] top-0">
            <BackgroundCircles />
          </div>
        </div>
        <h1 className="text-2xl font-semibold px-10">
          <span> {text} </span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
            <a href="#about">
            <button className="heroButton"> About </button>
            </a>

          {/* <a href="#experiencia">
            <button className="heroButton"> Experiencia </button>
          </a > */}

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
