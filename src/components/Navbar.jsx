import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-lg z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Nombre */}
        <a
          href="#home"
          className="text-2xl md:text-3xl font-bold text-sky-400 tracking-wide hover:text-sky-300 transition"
        >
          Aiven Systems
        </a>

        {/* Enlaces para escritorio */}
        <div className="hidden md:flex space-x-8 text-slate-300 font-medium">
          <a href="#home" className="hover:text-sky-400 transition">
            Inicio
          </a>
          <a href="#about" className="hover:text-sky-400 transition">
            Nosotros
          </a>
          <a href="#services" className="hover:text-sky-400 transition">
            Servicios
          </a>
          <a href="#contact" className="hover:text-sky-400 transition">
            Contacto
          </a>
        </div>

        {/* Botón menú móvil */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-sky-400 focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú Móvil */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900/95 text-slate-200 px-6 pb-6 flex flex-col space-y-4">
          <a
            href="#home"
            className="hover:text-sky-400 transition"
            onClick={toggleMenu}
          >
            Inicio
          </a>
          <a
            href="#about"
            className="hover:text-sky-400 transition"
            onClick={toggleMenu}
          >
            Nosotros
          </a>
          <a
            href="#services"
            className="hover:text-sky-400 transition"
            onClick={toggleMenu}
          >
            Servicios
          </a>
          <a
            href="#contact"
            className="hover:text-sky-400 transition"
            onClick={toggleMenu}
          >
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
}
