import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Desarrollador Full Stack
        </h1>
        <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
          Transformando ideas en experiencias digitales excepcionales
        </p>
        
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-white hover:text-cyan-400 transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="#" className="text-white hover:text-cyan-400 transition-colors duration-300">
            <Linkedin size={24} />
          </a>
          <a href="#" className="text-white hover:text-cyan-400 transition-colors duration-300">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}