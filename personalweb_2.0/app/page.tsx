"use client"
import type { NextPage } from "next";
import Head from "next/head";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Experiencia from "./components/Experiencia";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Proyectos from "./components/Proyectos";
import Skills from "./components/Skills";
import React, { useEffect } from 'react';
import { LanguageProvider } from "../app/context/LanguageContext"

const Home: NextPage = () => {
  useEffect(() => {
    // Detectar el idioma del navegador
    const detectedLanguage = navigator.language.split('-')[0];
    console.log(detectedLanguage);
  }, []);

  return (
    <LanguageProvider>
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

        <section id="skills" className="snap-start">
          <Skills />
        </section>

        <section id="proyectos" className="snap-start">
          <Proyectos />
        </section>

        <section id="contactame" className="snap-start">
          <ContactMe />
        </section>

        <iframe title="Jerarquias2" width="1140" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=0dd75a14-0b20-4ea4-9642-93f00d64d437&autoAuth=true&ctid=3a6d51bf-f1d4-47df-9a61-8bbe9c0e1e66" frameborder="0" allowFullScreen="true"></iframe>
        
      </div>
    </LanguageProvider>
  )
};

export default Home;
