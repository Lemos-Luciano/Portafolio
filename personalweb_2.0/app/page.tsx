import type { NextPage } from "next";
import Head from "next/head";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Experiencia from "./components/Experiencia";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Proyectos from "./components/Proyectos";
import Skills from "./components/Skills";
import Link from "next/link";
import Mano from "../public/DedoPaArriba.png";




const Home : NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/200 scrollbar-thumb-[#F7AB0A]/80">
      
      <Head>
        <title>Lemos Luciano</title>
      </Head>

      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experiencia" className="snap-center">
        <Experiencia />
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

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img 
            src={Mano.src}
            alt="Mano" 
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer" />
          </div>
        </footer>
      </Link>

    </div>  
  )
};

export default Home;
