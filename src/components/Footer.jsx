import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 text-center py-6 mt-16">
      <p className="text-sm">
        © {new Date().getFullYear()} <span className="text-sky-400 font-semibold">Aiven Systems</span>.  
        Inteligencia que impulsa tu negocio.
      </p>
    </footer>
  );
}

