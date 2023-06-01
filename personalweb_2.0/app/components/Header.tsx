'use client'
import React, { useContext } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Boton2 from "../components/Boton2"

import LanguageContext from '../context/LanguageContext';


type Props = {};

export default function Header({}: Props) {

  const {texts, cambiarIdioma} = useContext(LanguageContext)

 return (
    // <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
    <div className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-50 xl:items-center">
      <motion.div 
      initial={{ x:-500, opacity: 0, scale: 0.5,}}
      animate={{ x: 0, opacity: 1, scale: 1, }}
      transition={{ duration: 1.5}}
      className="flex flex-row items-center">
        {/* Social Icons */}
        <SocialIcon
          url="https://www.linkedin.com/in/luciano-lemos"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Lemos-Luciano"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>


      <Boton2></Boton2>



      <motion.div 
        initial={{ x:500, opacity: 0, scale: 0.5,}}
        animate={{ x: 0, opacity: 1, scale: 1, }}
        transition={{ duration: 1.5}}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
            url="#contactame"
          />
          <a href="#contactame" className="uppercase hidden md:inline-flex text-sm text-gray-400" > contactame</a>
      </motion.div>
    </div>
    // </header>
  );
}
