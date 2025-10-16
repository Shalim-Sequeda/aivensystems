import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Linkedin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 text-slate-200 flex flex-col items-center justify-center px-6 py-16"
    >
      {/* Título */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-sky-400"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Contáctanos
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
        {/* Información de contacto */}
        <motion.div
          className="flex flex-col justify-center space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-sky-300 mb-4">
            Información de Contacto
          </h3>

          <div className="flex items-center space-x-4">
            <Mail className="text-sky-400" size={24} />
            <p>contacto@aivensystems.com</p>
          </div>

          <div className="flex items-center space-x-4">
            <Phone className="text-sky-400" size={24} />
            <p>+57 302 365 7540</p>
          </div>

          <div className="flex items-center space-x-4">
            <MessageCircle className="text-green-400" size={24} />
            <a
              href="https://wa.me/573023657540"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-green-400 transition"
            >
              Escríbenos por WhatsApp
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <MapPin className="text-sky-400" size={24} />
            <p>Cartagena, Colombia</p>
          </div>

          <div className="flex space-x-6 mt-4">
            <a
              href="https://www.instagram.com/aivensystems"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition"
            >
              <Instagram size={26} />
            </a>
            <a
              href="https://www.linkedin.com/company/aivensystems"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-sky-400 transition"
            >
              <Linkedin size={26} />
            </a>
          </div>
        </motion.div>

        {/* Formulario de contacto funcional */}
        <motion.form
          action="https://formspree.io/f/manpvwvv"
          method="POST"
          className="bg-slate-900 rounded-2xl p-8 shadow-lg flex flex-col space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-sky-300 mb-4">
            Envíanos un mensaje
          </h3>

          <input
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            className="p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />

          <textarea
            name="mensaje"
            placeholder="Escribe tu mensaje..."
            rows="5"
            className="p-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 transition text-white py-3 rounded-lg font-semibold"
          >
            Enviar mensaje
          </button>
        </motion.form>
      </div>
    </section>
  );
}


