/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      {/* Animación del título principal */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-4 text-sky-400 drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Aiven Systems
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        className="text-lg md:text-2xl text-slate-300 mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Inteligencia que impulsa tu negocio 🚀
      </motion.p>

      {/* Botón con animación */}
      <motion.a
        href="#about"
        className="mt-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:shadow-sky-500/40 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Conócenos
      </motion.a>
    </section>
  );
}

