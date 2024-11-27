import React from 'react';
import { Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-text bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
          Contacto
        </h2>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-white mb-2">Nombre</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none
                         text-white transition-colors duration-300"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none
                         text-white transition-colors duration-300"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-white mb-2">Mensaje</label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 bg-black border border-white/10 rounded-lg focus:border-cyan-400 focus:outline-none
                         text-white transition-colors duration-300"
            />
          </div>
          
          <button
            type="submit"
            className="w-full py-3 px-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-lg
                     hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Enviar Mensaje
          </button>
        </form>
      </div>
    </section>
  );
}