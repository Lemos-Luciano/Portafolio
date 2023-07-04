"use client";
import React, { useContext, useEffect }  from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

import LanguageContext from '../context/LanguageContext';


type Props = {};

export default function Hero({}: Props) {


  const {texts, language} = useContext(LanguageContext)

  const word1 = [
    "Bienvenid@",
    "Mi nombre es Luciano Lemos",
    "Espero que disfrute mi contenido",
    "No dude en contactarme🤙📲",
  ]

  const word2 = [
    "Welcome",
    "I'm Luciano Lemos",
    "I hope you enjoy my content",
    "Feel free to contact me🤙📲",
  ]


  const [text, count] = useTypewriter({
    words: (language === "es") ? word1 : word2,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <div className="z-20 space-y-10">
        <h2 className="text-base uppercase text-gray-500 pb-2 tracking-[15px]">
          {texts.hero_title}
        </h2>
        <div className="relative">
          <img
            className="relative rounded-full h-32 w-32 mx-auto object-cover"
            src="../../Profile.jpg"
            alt="Profile Image"
            id="fotoperfil"
          />
          <div className="absolute left-[50%] top-0 z-0">
            <BackgroundCircles />
          </div>
        </div>
        <h1 className="relative z-20 text-2xl font-semibold px-10">
          <span> {text} </span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
            <a href="#about">
            <button className="heroButton"> {texts.hero_about} </button>
            </a>

          {/* <a href="#experiencia">
            <button className="heroButton"> Experiencia </button>
          </a > */}

          <a href="#skills">
            <button className="heroButton"> {texts.hero_skills} </button>
          </a>
 
          <a href="#proyectos">
            <button className="heroButton"> {texts.hero_projects} </button>
          </a>
          <a href="#contactame">
            <button className="heroButton"> {texts.hero_contact} </button>
          </a>
        </div>
      </div>
    </div>

  );
}
