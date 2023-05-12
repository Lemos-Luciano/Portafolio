import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Experiencia from "./components/Experiencia";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Proyectos from "./components/Proyectos";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      
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

      <section id="contactme" className="snap-start">
        <ContactMe />
      </section>

    </div>  
  )
}
