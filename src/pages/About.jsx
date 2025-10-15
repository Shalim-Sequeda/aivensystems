import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-slate-950 text-slate-200 flex flex-col items-center justify-center px-6 py-16"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-sky-400"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        ¿Quiénes Somos?
      </motion.h2>

      <motion.p
        className="max-w-3xl text-center text-lg md:text-xl leading-relaxed text-slate-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        En <span className="text-sky-400 font-semibold">Aiven Systems</span> {" "}
         desarrollamos soluciones tecnológicas inteligentes que potencian la productividad, 
        la eficiencia y la transformación digital de las empresas.  
        Nuestro compromiso es impulsar el crecimiento de cada cliente mediante innovación, 
        automatización y herramientas basadas en inteligencia artificial.
      </motion.p>
    </section>
  );
}
