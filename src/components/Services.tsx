import React from 'react';
import { Code2, Palette, Globe } from 'lucide-react';

const services = [
  {
    icon: <Code2 size={40} />,
    title: 'Desarrollo Web',
    description: 'Creación de aplicaciones web modernas y responsivas utilizando las últimas tecnologías.',
  },
  {
    icon: <Palette size={40} />,
    title: 'Diseño UI/UX',
    description: 'Diseño de interfaces intuitivas y experiencias de usuario excepcionales.',
  },
  {
    icon: <Globe size={40} />,
    title: 'SEO',
    description: 'Optimización para motores de búsqueda y mejora de la visibilidad online.',
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Mis Servicios
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-lg border border-white/10 hover:border-cyan-400/50 transition-all duration-300
                        bg-gradient-to-b from-black to-purple-900/10 group"
            >
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}