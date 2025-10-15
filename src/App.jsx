import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-200">
      {/* Barra de navegación fija */}
      <Navbar />

      {/* Contenido principal */}
      <main className="pt-20">
        <section id="home">
          <Home />
        </section>

        {/* Separador */}
        <div className="h-px w-11/12 mx-auto bg-gradient-to-r from-transparent via-sky-500/30 to-transparent my-8"></div>

        <section id="about">
          <About />
        </section>

        {/* Separador */}
        <div className="h-px w-11/12 mx-auto bg-gradient-to-r from-transparent via-sky-500/30 to-transparent my-8"></div>

        <section id="services">
          <Services />
        </section>

        {/* Separador */}
        <div className="h-px w-11/12 mx-auto bg-gradient-to-r from-transparent via-sky-500/30 to-transparent my-8"></div>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}
