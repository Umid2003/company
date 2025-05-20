import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Services from "./Services";



export default function Page() {
  return (
    <div>
      <section id="home">
        <Home />
      </section>
      <section id="about" >
        <About />
      </section>
      <section id="services" >
        <Services />
      </section>
      <section id="projects" >
        <Projects />
      </section>
       <section id="contact" >
        <Contact />
      </section>
    </div>
  )
}
