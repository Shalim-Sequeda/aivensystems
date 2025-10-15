import React from "react";
import { motion } from "framer-motion";
import { Cpu, Globe, Brain, Settings } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Cpu size={40} className="text-sky-400" />,
      title: "Desarrollo a la Medida",
      description:
        "Creamos software personalizado que se adapta a las necesidades específicas de tu empresa, optimizando procesos y resultados.",
    },
    {
      icon: <Brain size={40} className="text-sky-400" />,
      title: "Inteligencia Artificial",
      description:
        "Implementamos soluciones basadas en IA para la automatización, el análisis predictivo y la mejora de la toma de decisiones empresariales.",
    },
    {
      icon: <Globe size={40} className="text-sky-400" />,
      title: "Transformación Digital",
      description:
        "Acompañamos a las organizaciones en su proceso de digitalización, integrando tecnologías innovadoras y escalables.",
    },
    {
      icon: <Settings size={40} className="text-sky-400" />,
      title: "Mantenimiento y Soporte",
      description:
        "Ofrecemos acompañamiento técnico continuo para garantizar el óptimo funcionamiento de tus sistemas y aplicaciones.",
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen bg-slate-950 text-slate-200 flex flex-col items-center justify-center px-6 py-16"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-sky-400"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Nuestros Servicios
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-slate-900 rounded-2xl p-6 text-center shadow-lg hover:shadow-sky-500/30 transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-sky-300">{service.title}</h3>
            <p className="text-slate-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
