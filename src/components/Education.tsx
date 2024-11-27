import React from 'react';

const education = [
  {
    year: '2020 - 2024',
    title: 'Ingeniería en Sistemas',
    institution: 'Universidad Tecnológica',
    description: 'Especialización en desarrollo de software y sistemas distribuidos.',
  },
  {
    year: '2019 - 2020',
    title: 'Certificación Full Stack',
    institution: 'Academia Digital',
    description: 'Desarrollo web full stack con React, Node.js y bases de datos.',
  },
  {
    year: '2018 - 2019',
    title: 'Diseño UX/UI',
    institution: 'Instituto de Diseño',
    description: 'Principios de diseño de interfaces y experiencia de usuario.',
  },
];

export function Education() {
  return (
    <section id="estudios" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Formación Académica
        </h2>
        
        <div className="space-y-8">
          {education.map((item, index) => (
            <div
              key={index}
              className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px 
                         before:bg-gradient-to-b before:from-cyan-400 before:to-purple-500"
            >
              <div className="absolute left-0 top-0 w-2 h-2 bg-cyan-400 rounded-full transform -translate-x-1/2" />
              <div className="text-sm text-cyan-400 mb-1">{item.year}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <div className="text-purple-400 mb-2">{item.institution}</div>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}