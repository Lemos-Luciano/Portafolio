"use client"

import type { NextPage } from "next";

import Head from "next/head";

import About from "./components/About";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import Experiencia from "./components/Experiencia";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Proyectos from "./components/Proyectos";
import Skills from "./components/Skills";


import React, { useEffect } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18n from '../i18n.js';


const Home : NextPage = () => {

  useEffect(() => {
    // Detectar el idioma del navegador
    const detectedLanguage = navigator.language.split('-')[0];
    console.log(detectedLanguage);
    i18n.changeLanguage(detectedLanguage);
  }, []);
  
  return (
    <I18nextProvider i18n={i18n}>
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/200 scrollbar-thumb-[#F7AB0A]/80">
      
      <Head>
        <title>Lemos Luciano</title>
      </Head>

      <Header />
      <Footer />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      {/* <section id="experiencia" className="snap-center">
        <Experiencia />
      </section> */}

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="proyectos" className="snap-start">
        <Proyectos />
      </section>

      <section id="contactame" className="snap-start">
        <ContactMe />
      </section>


    </div>
    </I18nextProvider>  
  )
};

export default Home;
