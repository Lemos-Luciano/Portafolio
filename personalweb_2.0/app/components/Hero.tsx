"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import FotoPerfil from "../../public/Profile.jpg";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Luciano Lemos",
      "Saltando el renglon si el texto es largo como este ejemplo",
      "Bienvenid@s",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={FotoPerfil.src}
        alt="Profile Image"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Desarrollador Fullstack
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span> {text} </span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton"> About </button>
          </Link>
          <Link href="#experiencia">
            <button className="heroButton"> Experiencia </button>
          </Link >
          <Link href="#skills">
            <button className="heroButton"> Skills </button>
          </Link>
          <Link href="#proyectos">
            <button className="heroButton"> Proyectos </button>
          </Link>
          <Link href="#contactame">
            <button className="heroButton"> Contacto </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
